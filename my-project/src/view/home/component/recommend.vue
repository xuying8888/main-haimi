<template>
   <div class='recomm' v-if="recomCont.length != 0">
     <h3>{{recomCont.Channel.Name}}</h3>
     <div class='brandImg'>
       <a href='#' v-for='item in recomCont.Records'>
         <div>
            <img :src='item.PictureWebp'>
         </div>
       </a>    
     </div>
   </div>
</template>
<script>
export default {
  name: 'recomCont',
  props: ['recomCont']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .recomm{
    font-size: 14px;
    margin-bottom: 10px;
    h3{
      font-size: 14px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      background: #fff;
      padding-top: 20px;
    }
  }
  .brandImg{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    a{
      width: 50%;
      overflow: hidden;
      display: block;
      float: left;
      position: relative;
      div{
        padding-top: 63%;
        img{
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
      
    }

  }
</style>
