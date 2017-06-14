<template>
   <div>
     <xiangguan :dinf-dan='dinfDan' :went-to='wentTo'></xiangguan>
   </div>  
</template>
<script>
import xiangguan from '../component/xiangguan'
export default {
  data() {
    return {
      dinfDan:'您还没有浏览记录哦',
      wentTo:'去首页逛逛'
    }
  },
  components: {
    xiangguan
  }
}
</script>
<style lang='less' scoped>

</style>

