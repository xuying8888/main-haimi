<template>
  <div>
     <remind></remind>
     <canUseQuan></canUseQuan>
  </div>
</template>
<script>
import remind from '../component/remind'
import canUseQuan from '../component/canUseQuan'
export default {
  data () {
    return {
 
    }
  },
  components:{
     remind,
     canUseQuan
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
</style>
