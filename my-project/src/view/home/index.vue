<template>
  <div>
    <section>
      <headerBar></headerBar>
      <navList v-direc-nav=''></navList>
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
import headerBar from './component/header'
import navList from './component/navlist'
export default {
  data () {
    return {
      bannerNav: []

    }
  },
  components:{
     headerBar,
     navList
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
</style>
