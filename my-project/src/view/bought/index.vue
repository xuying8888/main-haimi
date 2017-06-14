<template>
  <div>
     <div v-if='shop!=""' class='all'>
       <div class='goutitle'>
          <label>
            <span class='dizhi-dfg'>海密严选</span>
            <div>
              <input type="checkbox" class='radioTwo'>
              <p class='radioDui'><span></span></p>
            </div>
          </label>
        </div>
       <div class="everyShop" v-for='(item,index) in shop'>
         <label>
           <div class='radioCheck'>
              <input type="checkbox" class='radioTwo'>
              <p class='radioDui'><span></span></p>
           </div>
           <dl>
             <dt v-if='item.prciureImg'>
               <img :src="item.prciureImg" alt="">
             </dt>
             <dd>
               <h3 class="title" v-if='item.name'>{{item.name}}</h3>
               <span class='del'>删除</span>
               <span class='type' v-if='item.price'>￥{{item.price}}</span>
               <span class='nums' v-if='item.numCount'>x{{item.numCount}}</span>
             </dd>
           </dl>
         </label>
       </div>
     </div>
     <div v-else>
       <buyCar></buyCar>
       <buyThing></buyThing>
     </div>

  </div>
</template>

<script>
import buyCar from './component/buyCar'
import buyThing from './component/buything'
export default {
  name:'bought',
  data () {
    return {
      shop:[],
      ind: '0'
    }
  },
  components:{
    buyCar,
    buyThing
  },
  methods:{
    getBought() {
      var arr = [],brr = [],crr = [];
      arr = JSON.parse(window.localStorage.getItem('main'))
      console.log(arr)
      for( var i=0;i<arr.length;i++){
        brr.push(JSON.parse(window.localStorage.getItem('product'+arr[i])))
      }
      for(var z=0;z<brr.length;z++){
        if(brr[z]!=null){
          this.shop.push(brr[z])
        }
      } 
    }
  },
  mounted() {
    this.getBought()
  }
}
</script>
<style lang='less' scoped>
.all{
  margin-bottom: 40px;
}
.goutitle{
  height: 35px;
  line-height: 35px;
  text-align: left;
  background: #fff;
  border-bottom: 1px solid #eee;
  padding-left: 35px;
  position: relative;
  div{
    position: absolute;
    top: 4px;
    left: 10px;
  }
}
.everyShop{
  position: relative;
  background: #fff;
  display: flex;
  .radioCheck{
    position: absolute;
    top: 34%;
    left: 10px;
  }
  dl{
    width: 100%;
    display: flex;
    dt{
      margin: 10px;
      margin-left: 35px;
      width: 57px;
      height: 57px;
      overflow: hidden;
      border: 1px solid #eee;
      img{
        width: 100%;
      }
    }
    dd{
      flex: 1;
      padding: 10px;
      padding-left: 0;
      position: relative;
      h3{
        width: 170px;
        font-size: 12px;
        height: 14px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .del{
        font-size: 12px;
        position: absolute;
        top: 10px;
        right: -25px;
      }
      .type{
        position: absolute;
        bottom: 10px;
        left: 10px;
      }
      .nums{
        position: absolute;
        bottom: 10px;
        right: -25px;
      }
    }
  }
}
.radioTwo{
  display: none;
}
.radioDui{
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #ccc;
  border-radius: 50%;
  line-height: 15px;
  span{
    display: inline-block;
    content: '';
    width: 10px;
    height: 6px;
    border-color: transparent;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-left: 2px;
    margin-top: 2px;
    transform: rotate(-45deg);
    display: none;
  }
}
input:checked + .radioDui{
  background: #991f33;  
}
input:checked + .radioDui span{
  display: block;  
}
</style>
