<template>
  <div class='typetitle'>
    <ul>
       <router-link 
       v-for='item in typetitle' 
       :to='item.link' 
       active-class="active">
         <li><span>{{item.name}}</span></li>
       </router-link>         
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      typetitle: [
        {
          name:'品牌',
          link:'/typePage/typecont'
        },
        {
          name:'分类',
          link:'/typePage/typetype'
        }
      ]

    }
  }
}
</script>
<style lang='less' scoped>
.typetitle{
  width: 100%;
  height: 35px;
  background: #fff;
  padding-bottom: 3px;
  text-align: center;
  ul{
    a{
      position: relative;
       li{
          display: inline-block;
          width: 70px;
          text-align: center;
          font-size: 12px;
          span{
            font-size: 14px;
            display: inline-block;
            padding: 15px 6px 6px;
          }
        }
      &.active:after{
        display: inline-block;
        content: "";
        width: 80%;
        height: 3px;
        background: #000;
        position: absolute;
        bottom: -6px;
        left: 10%;
      }
    }

   
  }
}

</style>
