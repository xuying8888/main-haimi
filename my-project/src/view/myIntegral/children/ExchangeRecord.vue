<template>
   <div class='buycar'>
     <router-link to='/homePage/recommendPage/2'>
       <i class='iconfont icon-shoucang'></i>
       <span class='text1'>您还没有兑换商品哦</span>
       <span class='text2'>立即去兑换</span>
      </router-link>
  </div>
</template>
<script>

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.buycar{
  width: 100%;
  height: 100%;
  a{
    display: block;
    width: 100%;
    padding-top: 5%; 
    i{
      font-size: 40px;   
      color: #999;

    }
    span{
      display: block;
      margin: 0 auto;
      margin-top: 10px;
      font-size: 12px;
    }
    .text1{
      color: #999;
    }
    .text2{
      color: #999;
      width: 85px;
      line-height: 20px;
      border: 1px solid #999;
      text-align: center;
    }
  }
}
</style>
