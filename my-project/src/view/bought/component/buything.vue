<template>
   <div class='recomm'>
       <h3>大家都在买的宝贝</h3>
       <div class='brandImg'>
         <a href='#' v-for='item in getbuythings.Suggest'>
           <dl>
             <dt>
               <img :src='item.PicturesWebp'>
             </dt>
             <dd>
               <p class='imgtit'>{{item.Subject}}</p>
               <p class='imgprice'>￥{{item.FinalPrice}}</p>
             </dd>
           </dl>
         </a>
       </div>
   </div>
</template>
<script>
export default {
 data () {
   return {
     getbuythings: []
   }
 },
 mounted () {
   this.getBuyThings()
 },
 methods: {
   getBuyThings () {
      this.$http.get('/api/buyThing').then(function(response){
        this.getbuythings = response.body.extra;
         console.log(response.body.extra)
      })
   }
 }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .recomm{
    with: 100%;
    font-size: 14px;
    margin-bottom: 50px;
    h3{
      font-size:14px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #fff;
      border-bottom: 1px solid #eee;
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
      margin-bottom: 5px;
      position: relative;
      dl{
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
          text-align: center;
          .imgtit{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            height: 30px;
            line-height: 30px;
            color: #ccc;
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
