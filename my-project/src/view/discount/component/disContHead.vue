<template>
  <div class='disContHead'>
     <ul>
     	<li v-for='item in getdisContHead'>
     	  <router-link :to='item.Link' active-class='on'>{{item.word}}</router-link>
     	</li>
     </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
    	getdisContHead:[
    	  {
    	    word:'可用',
    	    Link:'/discount/canUse'
    	  },
    	  {
    	    word:'已使用',
    	    Link:'/discount/alreadyUse'
    	  },
    	  {
    	    word:'已过期',
    	    Link:'/discount/cannotUse'
    	  }
    	]
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.disContHead{
	height: 40px;
	background: #fff;
	ul{
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		border-bottom: 1px solid #ccc;
		li{
		  line-height: 40px;
		  .on{
		    display: inline-block;
		  	width: 40px;
		  	color: #991f33;
		  	border-bottom: 2px solid #991f33;
		  }
		}
	}
}
</style>
