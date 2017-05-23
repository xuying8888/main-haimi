<template>
  <div class='pingfen'>
    <h3 class='pingTitle' v-if='pingfenText.TopReviews '>宝贝评分</h3>
    <div class="pingCont">
      <div v-for='item in pingfenText.TopReviews'>
        <div class='pingtxt'>
          <p class='pingimg'>
            <img :src="item.Buyer.Avatar" alt="">
          </p>
          <span class='pingname'>{{item.Buyer.NickName}}</span>
          <span class='pingtime'>时间</span>
        </div>
        <p class='pingText'>{{item.BuyerNote}}</p>
        <div class='pingImgs'>
          <p><img v-if='item.BuyerPicturesThumbWebp' :src="item.BuyerPicturesThumbWebp" alt=""></p>
          <p><img v-if='item.BuyerPicturesWebp' :src="item.BuyerPicturesWebp" alt=""></p>
          <p><img v-if='item.BuyerPicturesThumb' :src="item.BuyerPicturesThumb" alt=""></p>      
        </div>
      </div>
    </div>
    <div class='canShu' v-html='pingfenText.Descriptioin'></div>
  </div>
</template>
<script>
export default {
  name: 'Swiper',
  props: ['pingfenText'],
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.pingfen{
  .pingTitle{
    height: 35px;
    line-height: 35px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: left;
    background: #fff;
    border-bottom: 1px solid #ccc;
  }
}
.pingCont{
  padding: 10px;
  background: #fff;
  div{
    .pingtxt{
      position: relative;
      padding-bottom: 10px;
      .pingimg{
        width: 25px;
        height: 28px;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      .pingname{
        font-size: 12px;
        color: #666;
        position: absolute;
        top: 5px;
        left: 30px;
      }
      .pingtime{
        font-size: 12px;
        color: #ccc;
        position: absolute;
        top: 5px;
        right: 10px;
      }
    }
    .pingText{
      font-size: 12px;
      color: #000;
      padding-bottom: 10px;
      text-align: left;
      padding-left: 10px;
      line-height: 16px;
    }
    .pingImgs{
      width: 100%;
      display: flex;
      margin-bottom: 10px;
      p{
        width: 30px;
        height: 30px;
        overflow: hidden;
        margin-left: 10px;
        img{
          width: 100%;
        }
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
      
    }
  }
}
</style>
