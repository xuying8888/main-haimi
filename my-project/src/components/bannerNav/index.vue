<template>
  <div class="bannerImg swiper-container">
    <ul class='swiper-wrapper'>
      <li class='swiper-slide' v-for='item in bannerNav'>
        <img v-if='item.BuyerPicturesThumbWebp' :src='item.BuyerPicturesThumbWebp'>
        <img v-else-if='item.PictureWebp' :src='item.PictureWebp'>
        <img v-else :src='item.picture'>
      </li>
    </ul>     
    <div class="swiper-pagination"></div>       
  </div>   
</template>
<script>
import '@/lib/swiper/swiper.min.css'
import '@/lib/swiper/swiper.min.js'
export default {
  name: 'Swiper',
  props:{
    'bannerNav':{
      "default":[]
    },
    "zoom":{
      "default":false
    }
  },
  data () {
    return {
      swiperObj:{}
    }
  },
  mounted () {
    this.swiperObj = new Swiper(this.$el,{
      pagination: '.swiper-pagination',
      paginationClickable: true,
      speed: 1000,
      autoplay: 1000,
      loop: true,
      zoom: this.zoom
    }) 
  },
  updated () {
    console.log(this.swiperObj.onResize())
    this.swiperObj.onResize()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .bannerImg
  {
    width: 100%;
    max-height: 280px;     
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
</style>
