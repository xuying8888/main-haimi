<template>
  <div class='pingfen' v-if='pingfenText.ReviewCount != 0'>
    <div class="pingTitleDiv">
      <p class='pingTitle'>宝贝评分</p>
      <p class="pingStar"></p>
      <p class="pingCount">{{pingfenText.ProductScore}}分</p>
    </div>
    <div class='clear'></div>   
    <div class="pingCont">
      <div class='pingContNei' v-for='(item,index) in pingfenText.TopReviews'>
        <div class='pingtxt'>
          <p class='pingimg'>
            <img :src="item.Buyer.Avatar" alt="">
          </p>
          <span class='pingname'>{{item.Buyer.NickName}}</span>
          <span class='pingtime'>{{item.CreateTime}}</span>
        </div>
        <p class='pingText'>{{item.BuyerNote}}</p>
        <div class='pingImgs'>
          <p v-if='item.BuyerPicturesThumbWebp' @click='watchImgs(index)'>
            <img :src="item.BuyerPicturesThumbWebp" alt="">
          </p>         
        </div>
      </div>
      <p class='allPing'>全部评价({{pingfenText.ReviewCount}})</p>
    </div>
    <div class="darkMark" :style='{display:display}' @click='markBei'>
      <bannerNav ref='swiper' :banner-nav='bannerNav' zoom="true"></bannerNav>
    </div>
    
  </div>
</template>
<script>
import bannerNav from '@/components/bannerNav/'
export default {
  name: '',
  props: ['pingfenText'],
  data () {
    return {
      'bannerNav':[],
      'display': 'none',
      'swiperObj':''
    }
  },
  methods: {
    watchImgs (index) {
      this.display = 'block'
      let that = this;
      this.pingfenText.TopReviews.forEach(function(item,index){
         that.bannerNav.push({
            BuyerPicturesThumbWebp : item.BuyerPicturesThumbWebp
         })
      })
      this.$refs.swiper.swiperObj.onResize(index,0,false)
    },
    markBei () {
      this.display = 'none'
      this.bannerNav = []
    }
  },
  components:{
     bannerNav
  },
  updated () {
    if( this.display!= 'none'){
       this.$refs.swiper.swiperObj.update()
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.pingTitleDiv{
  height: 35px;
  line-height: 35px;
  text-align: left;
  background: #fff;
  border-bottom: 1px solid #ccc;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
  .pingTitle{
    float: left;
  }
  .pingStar{
    width: 75px;
    height: 15px;
    margin-top: 10px;
    margin-left: 5px; 
    float: left;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAYAAAAJKR1YAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXZJREFUeNrMlzFOwzAUhtOC1KEnKCgTrEWCZECwcwNYYYADQOlMq3YrAlbEEXoDDlBggDNAJS7QDQES/5P+wUKunTh2kid9Suz4KZ9l58lpPMTbkUMc8PqYN/F0/mZ8vuogswImoAFkNr+Rx2g65ByDLdDlfVSlUBuMlPaYfZUJXYI1pd1hXyVC8vK+pr/PZ6ULjZYsT5tLV6qQbOATy0bvlik04eduKgXXPoR0dajF+rIL9niNMxbLOXgGM/ACpAp+5RVaV14sJJRyiZgcsi0yr5R7ouinTegMXEVhosXJCudgCAa2PTTgwNBhlVE3dWipTDL/v7JQUplldJ+9b6lcMsvqkC+p3DKmwlhUyknGVqnvCwg555qEkgJCad2EkroJ7YQQSuu0ZJ2Cp0Dn/GbO5ZJfninYJ1PDb1AaUmgB7sAmOOIxYsZ76bvlmMJ70Cb0AXo848jx4V0zVvouOKbHHO9CP8rsbzSz18WCYzeY++0i9CfAAPXVQoZab75nAAAAAElFTkSuQmCC) repeat-x;
    background-size: 15px;
  }
  .pingCount{
    padding-left: 5px;
    color: #991f33;
  }
}
.pingCont{
  padding-top: 10px;
  background: #fff;
  margin-bottom: 10px;
  .pingContNei{
    padding-left: 10px;
    padding-right: 10px;
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
        width: 45px;
        height: 45px;
        overflow: hidden;
        margin-left: 10px;
        img{
          width: 100%;
        }
      }
    }
  }
  .allPing{
    border-top: 1px solid #ccc;
    line-height: 35px;
    font-size: 12px;
  }
}
li{
  width: 100%;   
}
img{
  width: 100%;
}
.swiper-pagination .swiper-pagination-bullet {
  width: 8px;
  height: 3px;
  display: inline-block;
  background: #ccc;
  opacity: 1;
}
.swiper-pagination .swiper-pagination-bullet-active {
  width: 20px;
  background: #666;
  opacity: 1;
  transtation: width 1s ease-in;
}
.swiper-container{
  z-index: 101;
  width: 100%;
}
.darkMark{
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  padding-left: 10px;
  padding-right: 10px;
  display: none;
  .bannerImg{
    margin: 40% auto;
  }
}
</style>
