<template>
   <div class='brand' v-if="brandCont.length != 0">
     <h3>{{brandCont.Channel.Name}}</h3>
     <div class='brandImg'>
       <div class='brandImg-left'>
         <a href='#'>
           <img :src='brandCont.Records[0].PictureWebp'>
         </a>
         <a href='#'>
           <img :src='brandCont.Records[1].PictureWebp'>
         </a>         
       </div>
       <div class='brandImg-right'>
         <img :src='brandCont.Records[2].PictureWebp'>
       </div>
     </div>
   </div>
</template>
<script>
 export default {
  name: 'brandCont',
  props: ['brandCont']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .brand{
    width:100%;
    margin-bottom: 10px;
    h3{
      font-size: 14px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      background: #fff;
    }
  }
  .brandImg{
    width: 100%;
    height: 200px;
    display: -webkit-flex;
    .brandImg-left{
      width: 52%;
      a{
        display: block;
        width: 100%;
        line-height:0
      }
      img{
        display: block;
        width: 100%;
      }
    }
    .brandImg-right{
      width: 48%;
      img{
        display: block;
        width: 100%;
      }
    }
  }
</style>
