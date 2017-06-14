<template>
   <div class='recomm'>
     <div class='brandImg'>
       <dl v-for='item in everyBody'>
         <router-link :to="{name:'shopDetail',params:{ProductID:item.ProductID} }">
           <dt>
             <img v-lazy='item.PicturesWebp'>
           </dt>
           <dd>
             <p class='imgtit'>{{item.Subject}}</p>
             <p class='imgprice'>￥{{item.FinalPrice}}</p>
           </dd>
          </router-link>
       </dl>
     </div>
   </div>
</template>
<script>
export default {
  name: 'everyBody',
  props: ['everyBody']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .recomm{
    with: 100%;
    font-size: 14px;
  }
  h3{
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }
  .brandImg{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    dl{
      width: 50%;
      overflow: hidden;
      display: block;
      float: left;
      margin-bottom: 5px;
      position: relative; 
      a{
        display: inline-block;
        width: 100%;
        background: #fff;
        dt{
          width: 100%;
          overflow: hidden;
          img{
            width: 100%;
          }
        }
        dd{
          font-size: 12px;
          text-align: left;
          margin-left: 5px;
          .imgtit{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            height: 30px;
            line-height: 30px;
          }
          .imgprice{
            padding-bottom: 10px;
          }
        }
      }
      &:nth-child(even){
        padding-left: 2.5px;
        box-sizing: border-box;
      }
      &:nth-child(odd){
        padding-right: 2.5px;
        box-sizing: border-box;
      }
    }
  }

</style>
