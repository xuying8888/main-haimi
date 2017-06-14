<template>
   <div>
      <search></search>
      <p class="order">
        <span>综合排序</span>
        <span>销量优先</span>
        <span>价格优先</span>
      </p>
      <typeContList v-if='everyBody' :every-body='everyBody'></typeContList>
      <typeContList v-if='everyBody2' :every-body='everyBody2'></typeContList>
   </div>
</template>
<script>
import search from '@/components/search/'
import typeContList from '@/view/typepage/component/typeContList'
export default {
  name:'typeContPage',
  data () {
    return {
      everyBody:[],
      everyBody2:[]
    }
  },
  components: {
    typeContList,
    search
  },
  created () {
    let wordValue = this.$route.params.pageId;
    this.$http.jsonp('http://www.haimi.com/api/search/product?ActivityID=&BonusID=&Status=ON&page=1&pageSize=20&Subject='+wordValue+"&Sort=&BrandID=&platform=WAP",
      {
          jsonp:"_callback"
      }
     ).then(function (res) {
        var data=res.data.data;
        // 要转成json对象
        this.everyBody = data;
     }) 
      this.$http.jsonp('http://www.haimi.com/api/search/product?ActivityID=&BonusID=&Status=ON&page=1&pageSize=20&Subject=&Sort=&BrandID='+wordValue+"&platform=WAP",
      {
          jsonp:"_callback"
      }
     ).then(function (res) {
        var data=res.data.data;
        // 要转成json对象
        this.everyBody2 = data;
     }) 
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.order{
  height: 35px;
  border-bottom: 1px solid #ccc;
  line-height: 35px;
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  background: #fff;
  margin-top: 40px;
}
</style>
