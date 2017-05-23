<template>
   <div class='bannerXiang'>
     <bannerNav :banner-nav='bannerNav'></bannerNav>
     <translate :translate-text='translateText'></translate>
     <pingfen :pingfen-text='translateText'></pingfen>
   </div>   
</template>
<script>
import bannerNav from '@/components/bannerNav/'
import translate from './component/translate'
import pingfen from './component/pingfen'
export default {
  data () {
    return {
      bannerNav:[],
      translateText:[]
    }
  },
  components: {
    bannerNav,
    translate,
    pingfen
  },
  created () {
    let ProductID=this.$route.params.ProductID;
    this.$http.jsonp('http://m.haimi.com/api/product/detail-cdn?ProductID='+ProductID+"&platform=WAP",
      {
          jsonp:"_callback"
      }
     ).then(function (res) {
        var data=res.data.data;
        // 要转成json对象
        this.bannerNav = JSON.parse(data.ProductPictures);
        this.translateText = res.data.data;
        console.log(data);
      
     }, function (response) {
        console.log(response)
     })
    
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   .bannerXiang{
     width: 100%;
     height: 200px;
     img{
      height: 100%;
     }
   }
</style>
