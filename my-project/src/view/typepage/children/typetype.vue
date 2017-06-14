<template>
  <div class='typecont'>
      <dl v-for='item in getTypeTypeList'>
        <router-link :to="'/typecontPage/'+item.CastID">
          <dt>
            <img v-lazy="item.PictureWebp" alt="">
          </dt>
          <dd>
            <h3>{{item.SlideName}}</h3>
            <p>{{item.Description}}</p>
          </dd>
        </router-link>
      </dl>
  </div>
</template>

<script>
export default {
  data () {
  	return {
  		getTypeTypeList: []

  	}
  },
  methods: {
     gettypetype () {
     	this.$http.get('/api/typeType').then(function(response){
            this.getTypeTypeList = response.data.data[0].Records
     	})
     }
  },
  mounted () {
     this.gettypetype()
  }
}
</script>
<style lang='less' scoped>
.typecont{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  background: #fff;
  dl{
    width: 33.333%;
    dt{
      img{
        width: 100%;
      }
    }
    dd{
       h3{
          font-size: 10px;
          padding-top: 10px;
          line-height: 15px;
       }
       p{
         text-align:center;
         width: 100%;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
         font-size: 10px;
         padding-bottom: 10px;
         color: #999;
         line-height: 15px;
       }
    }
  }
}
</style>