<template>
  <div class='buycar'>
     <router-link to='/homePage/recommendPage/2'>
       <i class='iconfont icon-shoucang'></i>
       <span class='text1'>{{dinfDan}}</span>
       <span class='text2'>{{wentTo}}</span>
      </router-link>
  </div>
</template>
<script>
import '@/static/css/iconfont.css'
export default {
  data () {
    return {
       
    }
  },
  props:['dinfDan','wentTo']
}
</script>
<style lang='less' scoped>
.buycar{
  width: 100%;
  height: 100%;
  a{
    display: block;
    width: 100%;
    padding-top: 40%; 
    i{
      font-size: 40px;   
      color: #666;

    }
    span{
      display: block;
      margin: 0 auto;
      margin-top: 10px;
      font-size: 12px;
    }
    .text1{
      color: #666;
    }
    .text2{
      width: 85px;
      line-height: 20px;
      border: 1px solid #000;
      text-align: center;
    }
  }
}
</style>
