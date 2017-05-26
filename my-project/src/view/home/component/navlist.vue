<template>
  <div id="nav">
    <p>
     <router-link 
        v-for='item in menulist'
        :to="item.Link+item.NavID" 
        active-class="active"
      >{{item.Title}}</router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: 'component',
  data () {
    return {
      menulist: [],
      scrollTxt:''
    }
  },
  mounted () {
      this.getNav()
  },
  methods: {
    getNav () {
      this.$http.get('/api/navList').then(function (response) {
        this.menulist = response.data.data;
      })                                                                        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#nav{
  font-size: 14px;
  background: #fff;
  p{
    overflow-x: auto;
    display: inline-flex;
    display: -webkit-box;
    width: 100%;
    height: 40px;
    border-bottom:solid #ccc 1px;
    a{
      display: block;
      padding: 0 10px;
      height:  40px;
      line-height:  40px;
      text-align: center;  
      position: relative; 
      &.active:after{
        display: inline-block;
        content: "";
        width: 80%;
        height: 3px;
        background: #000;
        position: absolute;
        bottom: 0;
        left: 10%;
      } 
    }
  }
}
.navlist{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
