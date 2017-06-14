<template>
  <div class='canUseQuan'>
     <div class='everyCan' v-for='item in canUseList'>
       <div class="everyCanTop">
         <div class="left">
           <h3>￥<span>{{item.sprice1}}</span></h3>
           <p>满{{item.sprice2}}使用</p>
         </div>
         <div class="right">
           <h3>新人注册礼</h3>
           <p>{{item.time}}</p>
         </div>
       </div>
       <h3 class="useChosr">使用说明</h3>
     </div>  
  </div>
</template>
<script>
import disContHead from '@/view/discount/component/disContHead'
export default {
  data () {
    return {
      canUseList:[
        {
          sprice1: 10,
          sprice2: 60,
          time:'2017.5.12-2017.5.22'
        },
        {
          sprice1: 20,
          sprice2: 199,
          time:'2017.5.12-2017.5.22'
        },
        {
          sprice1: 30,
          sprice2: 199,
          time:'2017.5.12-2017.5.22'
        }
      ]
    }
  },
  components:{

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.everyCan{
  border-bottom: 10px;
  background: #fff;
  margin-bottom: 10px;
  .everyCanTop{
    border-bottom: 1px solid #eee;
    display: flex;
    .left{
      padding: 10px 30px 10px 15px;
      border-right: 1px solid #eee;
      color: #991f33;
      text-align: left;
      h3{
        font-size: 10px;
        span{
          font-size: 18px;
        }
      }
      p{
         font-size: 12px;
      }
    }
    .right{
      padding: 10px 0 10px 5px;
      text-align: left;
      font-size: 12px;
      line-height: 18px;
      p{
        color: #999
      }
    }
  }
  .useChosr{
    height: 35px;
    line-height: 35px;
    color: #999;
    text-align: left;
    padding-left: 10px;
  }
}
</style>
