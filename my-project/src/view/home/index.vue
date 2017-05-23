<template>
  <div>
    <section>
      <headerBar></headerBar>
      <navList></navList>
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
import headerBar from './component/header'
import navList from './component/navlist'
import bannerNav from '../../components/bannerNav/'
import menuList from './component/menulist'
import everyDay from './component/everyday'
import brand from './component/brand'
import recommend from './component/recommend'
import japan from './component/japan'
import everyBody from '@/components/contList/'
export default {
  data () {
    return {
      bannerNav: [],
      menuList: [],
      everyDay1: [],
      everyDay2: [],
      brandCont: [],
      recomCont: [],
      jspanCont1: [],
      jspanCont2: [],
      jspanCont3: [],
      jspanTitle1: [],
      jspanTitle2: [],
      jspanTitle3: [],
      everyBody: []

    }
  },
  components:{
     headerBar,
     navList,
     bannerNav,
     menuList,
     everyDay,
     brand,
     recommend,
     japan,
     everyBody
  },
  mounted () {
    this.getbannerNav()
    this.geteveperson()
  },
  methods: {
    getbannerNav () {
      this.$http.get('/api/bannerNav').then(function (response) {
        this.bannerNav = response.data.data[0].Records;
        this.menuList = response.data.data[1];   
        this.everyDay1 = response.data.data[2].Records[0].PictureWebp;
        this.everyDay2 = response.data.data[3].Records[0].PictureWebp;
        this.brandCont = response.data.data[4];
        this.recomCont = response.data.data[5];
        this.jspanTitle1 = response.data.data[6].Records[0].PictureWebp;
        this.jspanCont1 = response.data.data[7];
        this.jspanTitle2 = response.data.data[8].Records[0].PictureWebp;
        this.jspanCont2 = response.data.data[9];
        this.jspanTitle3 = response.data.data[10].Records[0].PictureWebp;
        this.jspanCont3 = response.data.data[11];
      })
    },
    geteveperson () {
      this.$http.get('/api/evePerson').then(function (response) {
        this.everyBody = response.data.data;
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
</style>
