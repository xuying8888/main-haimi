<template>
  <div>
     <p class='bannerimg' v-if = 'Juhometitle.img '>
       <img v-lazy='Juhometitle.img'>
     </p>
     <div class='recomm'>
       <h3>{{Juhometitle.name}}</h3>  
       <div class='brandImg'>
         <dl v-for='item in Juhomecont'>
          <router-link :to="{name:'shopDetail',params:{ProductID:item.ProductID} }" >
           <dt>
             <img v-lazy='item.PicturesWebp'>
           </dt>
           <dd>
             <p class='imgtit'>{{item.Subject}}</p>
             <p class='imgprice'>￥{{item.FinalPrice}}</p>
           </dd>
            </router-link>
         </dl>
       </div>
     </div>
    </div>
</template>

<script>
import homePage from '@/view/home/'
export default {
  name: 'hello',
  data () {
    return {
      Juhometitle: [],
      Juhomecont: []
    }
  },
  created () {
    this.getJuHomeTitle()
  },
  methods: {
    getJuHomeTitle () {
      var getIds = this.$route.params.id;
      this.$http.get('/api/juHomeTitle').then(function (response) {
         this.Juhometitle = response.data[getIds];   
      })
      this.$http.get('/api/juHomeCont').then(function (response) {
         this.Juhomecont = response.data[getIds].data[0].Products;
      })
    }
  },
  watch: {
    '$route':"getJuHomeTitle"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.bannerimg{
  width: 100%;
  img{
    width: 100%;
  }
}
.recomm{
  with: 100%;
  font-size: 14px;
  margin-bottom: 50px;
}
h3{
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.brandImg{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  dl{
    width: 50%;
    background: #fff;
    margin-bottom: 5px;
    dt{
      width: 100%;
      height: 120px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    dd{
      font-size: 12px;
      text-align: left;
      margin-left: 5px;
      .imgtit{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;4
        height: 30px;
        line-height: 30px;
      }
      .imgprice{
        padding-bottom: 10px;
      }
    }
    &:nth-child(even){
      border-left: 2.5px solid rgba(212, 210, 210, 0.23);
      box-sizing: border-box;
    }
    &:nth-child(odd){
      border-right: 2.5px solid rgba(212, 210, 210, 0.23);
      box-sizing: border-box;
    }
  }
  
 
}

</style>
