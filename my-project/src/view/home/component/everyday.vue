<template>
   <div class='everyday'>
     <router-link :to="{name:'shopDetail',params:{ProductID:everyDay1.CastID} }" >
       <img v-lazy='everyDay1'>
     </router-link>   
   </div>
</template>
<script>
export default {
  name: 'everyDay1',
  props: ['everyDay1']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .everyday{
    width: 100%;
  }
  a{
    display: block;
    width: 100%;
    line-height: 0;
    margin-bottom: 5px;
    img{
      width: 100%;
    }
  }
</style>
