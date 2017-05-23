<template>
  <div class='typecont'>
  	<div v-for='item in getTypeBrandList'>
  		<p class='typecont-img' v-if='item.Records[0].PictureWebp.length != 0'>
	     	<img :src="item.Records[0].PictureWebp" alt="">
	     </p>
	     <p class='typecont-word' v-else>
	     	<span v-for='i in item.Records'>{{i.SlideName}}</span>
	     </p>
  	</div>
    9
  </div>
</template>

<script>
export default {
  data () {
  	return {
  		getTypeBrandList: []

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
body{
  background: #fff;
}
.typecont{
	margin-bottom: 10px;
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
