<template>
   <div class='recomm'>
     <div class='title'>
        <img v-lazy='jspanTitle'>
     </div>    
     <div class='brandImg swiper-container'>
       <div class='swiper-wrapper'>
         <dl class='swiper-slide' v-for='item in jspanCont1.Records'>
          <router-link :to="{name:'shopDetail',params:{ProductID:item.CastID} }" >
           <dt>
             <img v-lazy='item.PictureWebp'>
           </dt>
           <dd>
             <p class='imgtit'>{{item.SlideName}}</p>
             <p class='imgprice'>{{item.Description}}</p>
           </dd>
           </router-link>
         </dl>
       </div>
     </div>
   </div>
</template>
<script>
export default {
  name: 'jspanCont1',
  props: ['jspanCont1','jspanTitle']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .recomm{
    with: 100%;
    font-size: 14px;
    margin-bottom: 10px;
    background: #fff;
  }
  .title{
    height: 40px;
    padding: 5px 0;
    text-align: center;
    img{
      width: 100%;
    }
  }
  .brandImg{
    width: 100%;
    overflow-x: auto;
    dl{
      width: 30%;
      text-align: center;
      display: flex;
      flex-direction: column;
      dt{
        width: 100%;
        img{
          width: 100%
        }
      }
      dd{
        padding-top: 5px;
        .imgtit{
          font-size: 12px;
        }
        .imgprice{
          font-size: 10px;
          line-height: 25px;
          color: #999;
        }
      }
    }
  }
  
</style>
