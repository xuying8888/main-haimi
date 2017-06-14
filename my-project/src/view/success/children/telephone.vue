<template>
  <div class='tele'>
    <p class='teleImg'> <img class="face" _v-4cd50e94="" src="//m.haimi.com/static/images/web/default-avatar-square.png"></p>
    <p class='telePhones'>您的手机号码：+86 <span>18510422025</span></p>
    <p class='btn'><a>确认更换</a></p>
  </div>
</template>
<script>
export default {
  name:'successPage',
  data () {
  	return {

  	}
  }
}
</script>
<style lang='less' scoped>
.tele{
  height: 100%;
  background: #fff;
  padding-left: 10px;
  padding-right: 10px;
  .teleImg{
    width: 40px;
    height: 40px;
    overflow: hidden;
    margin: 0 auto;
    padding-top:  20px;
    padding-bottom: 20px;
    img{
      width: 100%;

    }
  }
  .btn{
    height: 30px;
    background: #991f33;
    margin-top: 30px;
    text-align: center;
    line-height: 30px;
    a{
      color: #fff;
    }
  }
}
</style>

