<template>
  <div>
      <router-view></router-view>
      <footerNav></footerNav>       
  </div>
</template>

<script>
import homePage from '@/view/home/'
import typePage from '@/view/typepage/'
import footerNav from '@/components/footerNav/'
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  components:{
    homePage,
    typePage,
    footerNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
</style>
