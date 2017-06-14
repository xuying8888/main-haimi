<template>
  <div class='typecont'>
  	<div v-for='item in getTypeBrandList'>
  		<p class='typecont-img' v-if='item.Records[0].PictureWebp.length != 0'>
	     	<img v-lazy="item.Records[0].PictureWebp" alt="">
	     </p>
	     <p class='typecont-word' v-else>
        <router-link v-for='i in item.Records' :to="'/typecontPage/'+i.SlideName">
          <span class='words'>{{i.SlideName}}</span>
        </router-link>
	     
	     </p>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
  	return {
  		getTypeBrandList: [],
      wordCast: [],

  	}
  },
  methods: {
     gettypebrand () {
     	this.$http.get('/api/typeBrand').then(function(response){
            this.getTypeBrandList = response.data.data
     	})
     }
  },
  mounted () {
     this.gettypebrand()
  }
}
</script>
<style lang='less' scoped>
.typecont{
	margin-bottom: 40px;
  background: #fff;
}
.typecont-word{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	padding-top: 10px;
	span{
		display: inline-block;
		padding: 4px 8px;
		border: 1px solid #e5e5e5;
		margin: 0 0 10px 10px;
	}
}

</style>
