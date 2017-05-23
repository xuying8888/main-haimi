<template>
   <div class='recomm' v-if="everyBody.length != 0">
     <div v-for='i in everyBody'>
       <h3>{{i.Title}}</h3>  
       <div class='brandImg'>
         <dl v-for='item in i.Products'>
           <router-link :to="{name:'shopDetail',params:{ProductID:item.ProductID} }" >
             <dt>
               <img :src='item.PicturesWebp'>
             </dt>
             <dd>
               <p class='imgtit'>{{item.Subject}}</p>
               <p class='imgprice'>￥{{item.FinalPrice}}</p>
             </dd>
            </router-link>
         </dl>
       </div>
     </div>
   </div>
</template>
<script>
export default {
  name: 'everybody',
  props: ['everyBody']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .recomm{
    with: 100%;
    font-size: 14px;
    margin-bottom: 50px;
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
          img{
            width: 74%;
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
