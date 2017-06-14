<template>
  <div class='myIntegral'>
    <div class='myIntegral1' v-for='item in inteDetail'>
    	<span class='myIntegral1img'></span>
    	<div class='myIntegralzi'>
    		<h3>{{item.Remark}}</h3>
    		<p>{{item.CreateTime}}</p>
    	</div>
    	<div class='myIntegralji'>+{{item.Amount}}</div>
    </div>
  </div>
</template>
<script>
export default {
   data() {
     return {
     	inteDetail: []
     }
   },
   methods: {
    getinteDetail() {
      this.$http.get('/api/inteDetail').then(function(response){
        this.inteDetail = response.data.data;
      })
    }
  },
  mounted() {
    this.getinteDetail()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.myIntegral1{
  display: flex;
  background: #fff;
  border-bottom: 1px solid #eee;
  font-size: 12px;
  padding: 5px;
  position: relative;
  .myIntegral1img{
  	display: inline-block;	
  	width: 17px;
  	height: 20px;
    background-size: 100%;
    background-image: url(//img.haimi.com/FltFKJvVoONme2nxtoMcpO4g5j0D);
    background-repeat: no-repeat;
    margin-right: 10px;
    margin-top: 10px;
  }
  .myIntegralzi{
  	text-align: left;
  	line-height: 20px;
  	p{
  		color: #999;
  	}
  }
  .myIntegralji{
  	color: #991f33;
  	font-size: 14px;
  	position: absolute;
  	top: 35%;
  	right: 5px;
  }
}
</style>
