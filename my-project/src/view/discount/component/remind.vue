<template>
  <div class='remind'>
     <h3>提醒</h3>
     <ul>
       <li>1、红包/优惠券每个订单</li>
       <li>2、红包/优惠券金额大于订单应付金额时，差额不予退回。</li>
       <li>3、使用红包/优惠券的订单发生退款，红包/优惠券不予退回（特殊未指定的除外）</li>
     </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
 
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.remind{
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #fff;
  padding: 20px;
  h3{
    line-height: 20px;
  }
  ul li{
    line-height: 18px;
    font-size: 12px;
  }
}
</style>
