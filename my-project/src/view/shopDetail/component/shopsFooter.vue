<template>
  <div class='boughtTian'>
      <dl>
       <dt><img :src="getBought.PicturesWebp" alt=""></dt>
       <dd>
         <h3 class="price">￥{{getBought.FinalPrice}}</h3>
         <p class="count">(库存{{getBought.Stock}}件)</p>
         <p class="change" v-if="getBought.AttrInfoArray!=''">请选择:颜色分类</p>
       </dd>
      </dl>
      <div class="boughtTian-center" v-for="item in getBought.AttrInfoArray">
          <p class='center-title'>{{item.AttrName}}</p>
          <p class="cenetr-list">
              <span v-for="i in item.AttrValues.split(',')">{{i}}</span>
          </p>
      </div>
      <div class="boughtTian-bottom">
        <span class="boughtCount">购买数量</span>
        <p><span>-</span><span>1</span><span>+</span></p>
      </div>
     <div class="boughtTian-sure">确定</div>

  </div>
</template>
<script>
export default {
 props:['getBought'],
 data () {
   return {
   }
 },
 methods: {
  buyThis () {

  }
 }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"> 
.boughtTian{
  z-index: 200;
  min-height: 200px;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  dl{
    padding: 10px;
    display: flex;
    border-bottom: 1px solid #ccc;
    dt{
      width: 50px;
      margin-right: 10px;
      img{
        width: 100%;
      }
    }
    dd{
      flex: 1;
      text-align: left;
      line-height: 18px;
      .price{
        color: #991f33
      }
      .count{
        color: #999
      }
      .change{
        color: #666;
      }
    }
  }
  .boughtTian-center{
    text-align: left;
    padding-left: 10px;
    padding-right: 10px;
    border-bottom: 1px solid #ccc;
    .center-title{
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .cenetr-list{
      display: flex;
      flex-wrap: wrap;
      span{
        padding: 3px 8px; 
        border: 1px solid #666;
        margin-right: 10px;
        margin-bottom: 10px;
      }

    }
  }
  .boughtTian-bottom{
    display: flex;
    padding: 20px 10px;
    position: relative;
    p{
      position: absolute;
      top: 20px;
      right: 10px;
      span{
        display: inline-block;
        width: 30px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        border: 1px solid #ccc;
        font-size: 12px;
      }
    }
  }
  .boughtTian-sure{
    width: 100%;
    height: 30px;
    background: #801a2a;
    color: #fff;
    text-align: center;
    line-height: 30px;
  }
}
</style>
