<template>
   <div class="menulist">
    <dl v-for='menu in menuList.Records'>
       <dt>
         <img :src='menu.PictureWebp'>
       </dt>
       <dd>{{menu.SlideName}}</dd>
    </dl>
   </div>   
</template>
<script>
export default {
  name: 'menu',
  props: ['menuList']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   .menulist{
     font-size:13px;
     width:100%;
     display:flex;
     margin-top:10px;
     margin-bottom:10px;
     background:#fff;
     padding-bottom: 10px;
   }
   dl{
     flex:1;
     text-align:center;
   }
   img{
     width: 80px;
     margin-bottom: 5px;
   }
</style>
