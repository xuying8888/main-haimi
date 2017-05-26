<template>
  <div>
     <disContHead></disContHead>
     <router-view></router-view>  
  </div>
</template>
<script>
import disContHead from '@/view/discount/component/disContHead'
export default {
  data () {
    return {
 
    }
  },
  components:{
     disContHead
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
</style>
