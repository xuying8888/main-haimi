<template>
  <div class='boughtTian'>
      <dl>
       <dt><img :src="getBought.PicturesWebp" alt=""></dt>
       <dd>
         <h3 class="price" v-if='!getBought.SkuInfo'>￥{{getBought.FinalPrice}}</h3>
         <h3 class="price" v-else>￥{{getBought.SkuInfo[index].Price}}</h3>

         <p class="count">(库存{{getBought.SkuInfo[index].Stock}}件)</p>
         <p class="change" v-if="getBought.AttrInfoArray!=''">请选择:颜色分类</p>
       </dd>
      </dl>
      <div class="boughtTian-center">
          <p class='center-title'></p>
          <p class="cenetr-list">
              <span v-for="(i,index) in getBought.SkuInfo" v-on:click.stop='changeType(index)' @click='changeType(index)' class='cenetrListE'> {{i.SkuName}} </span>
          </p>
      </div>
      <div class="boughtTian-bottom">
        <span class="boughtCount" >购买数量</span>
        <p><span v-on:click.stop='delCount' :click='delCount'>-</span><span id='num'>1</span><span v-on:click.stop='addCount' :click='addCount'>+</span></p>
      </div>
     <div class="boughtTian-sure" @click='sureTrue'>确定</div>
  </div>
</template>
<script>
export default {
 props:['getBought'],
 data () {
   return {
     index: '0'
   }
 },
 methods: { 
  delCount() {
    var num = document.getElementsByClassName('num')[0].innerHTML;
    if(num<=1){
      alert('至少选择一件')
    }else{
      num--;
    }
    document.getElementsByClassName('num')[0].innerHTML = num;
  },
  addCount() {
    var num = document.getElementsByClassName('num')[0].innerHTML;
    if(num>=8){
      alert('最多选择八件')
    } else{
      num++;
    }
    document.getElementsByClassName('num')[0].innerHTML = num;
  },
  changeType(index) {
     this.index = index;
     var cenetrListE = document.getElementsByClassName('cenetrListE');
     for(var i=0;i<cenetrListE.length;i++){
       cenetrListE[i].style.borderColor = '#666'
       cenetrListE[i].style.color = '#666'
     }
     cenetrListE[this.index].style.borderColor = '#801a2a'
     cenetrListE[this.index].style.color = '#801a2a'

  },
  sureTrue() {
    var obj = {
       price : this.getBought.FinalPrice,
       numCount: document.getElementById('num').innerHTML,
       name: this.getBought.Subject,
       prciureImg: this.getBought.Pictures,
       idTxt: this.getBought.ProductID
    }
    var arr = window.localStorage['main'];
    var brr = arr? JSON.parse(arr):[];
    brr.push(this.getBought.ProductID)
    window.localStorage.setItem('main',JSON.stringify(brr))
    window.localStorage.setItem('product'+this.getBought.ProductID,JSON.stringify(obj))
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
    color: #666;
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
