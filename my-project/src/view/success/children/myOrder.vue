<template>
  <div>
    <div class='orderform-type'>
      <ul v-for='item in getOrderType'>
        <li><router-link :to='item.link+"/"+item.id' active-class='active'>{{item.word}}</router-link></li>
      </ul>
    </div>
    <router-view :dinf-dan='dinfDan' :went-to='wentTo'></router-view>
  </div>
  
</template>
<script>
export default {
  name:'successPage',
  data () {
  	return {
       getOrderType:[
         {
          word:'全部',
          link:'/myOrder/xiangguan',
          id:1
         },
          {
          word:'待付款',
          link:'/myOrder/xiangguan',
          id:2
         },
          {
          word:'待发货',
          link:'/myOrder/xiangguan',
          id:3
         },
          {
          word:'待收货',
          link:'/myOrder/xiangguan',
          id:4
         },
         {
          word:'待评价',
          link:'/myOrder/xiangguan',
          id:5
         },
          {
          word:'退款',
          link:'/myOrder/xiangguan',
          id:6
         }
       ],
       dinfDan: '您还没有相关订单哦',
       wentTo:'去首页逛逛'
  	}
  }
}
</script>
<style lang='less' scoped>
.orderform-type{
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 12px;
  margin-bottom: 10px;
  background: #fff;
  ul{
    width: 100%;
    display: flex;
    li{
      flex:1;
    }
  }
}
.active{
  display: inline-block;
  height: 40px;
  width: 36px;
  border-bottom: 2px solid #000;
}
</style>

