<template>
  <div class='introduct'>
    <dl class='shopPing' v-if='introductCont.Mall'>
      <dt>
        <img v-lazy="introductCont.Mall.LogoSrc" alt="">
      </dt>
      <dd>
        <p class='shopPingTitle'>{{introductCont.Mall.MallName}}</p>
        <p class='shopPingTxt'>{{introductCont.Mall.Introduction}}</p>
      </dd>
    </dl>
    <ul class="transGood">
      <li>
        <p>发现更多<span>{{introductCont.BrandName}}</span>良品</p>
        <span class='transGoodRight'>></span>
      </li>
    </ul>
    <div class="qrCode">
      <h3 class="qrCodeTitle">商品详情</h3>
      <p class="qrCodeImg">
        <img src="http://img.haimi.com/Fpf_7URcK8ypvJq3cz3JySMSN6MI" alt="">
      </p>
    </div>
    <div class='canShu' v-html='introductCont.Descriptioin'></div>
  </div>
</template>
<script>
export default {
  name: '',
  props: ['introductCont'],
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.introduct{
  width: 100%;
  overflow: hidden;
  .shopPing{
    width: 100%;
    background: #fff;
    display: flex;
    padding: 10px;
    margin-bottom: 10px;
    dt{
      width: 40px;
      height: 40px;
      overflow: hidden;
      margin-right: 10px;
      img{
        width: 100%;
      }
    }
    dd{
     text-align: left;
     .shopPingTitle{
      line-height: 20px;
     }
     .shopPingTxt{
       font-size: 12px;
       color: #666;
     }

    }
  }
  .transGood{
    width: 100%;
    overflow: hidden;
    font-size: 12px;
    margin-bottom: 10px;
    li{
      padding-left: 10px;
      height: 35px;
      line-height: 35px;
      background: #fff;
      position: relative;
      border-bottom: 1px solid #eee;
      p{
        text-align: left;
        span{
           color: #991f33;
        }
      }
      .transGoodRight{
        font-size: 16px;
        color: #ccc;
        position: absolute;
        top: 5px;
        right: 20px;
      }
    }
  }
  .qrCode{
    padding-right: 10px;
    padding-left: 10px;
    background: #fff;
    .qrCodeTitle{
      font-size: 12px;
      text-align: left;
      height: 35px;
      line-height: 35px;
    }
    .qrCodeImg{
      width: 100%;
      padding-bottom: 10px;
      img{
        width: 100%;
      }
    }
  }
}
.canShu{
  overflow: hidden;
  background: #fff;
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
  p{
    width: 100%;
    img{
      width: 100%;
      padding-bottom: 10px !important;
    }
  }
}
</style>
