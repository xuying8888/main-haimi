<template>
   <div class='recomm'>
       <h3>积分换劵</h3>
       <div class='brandImg'>
         <a href='#' v-for='item in data.Virtual'>
           <div class='brandImgWord'>
               <p class='imgimg'>
               	<img src="http://img.haimi.com/Fj-5xwCHiJsuflbgeqHQCYym6snl" alt="">
               	<span>￥<strong>{{item.Amount}}</strong></span>
               </p>
               <p class='imgtit'>{{item.Subject}}</p>
               <p class='imgInte'>{{item.Credit}}积分</p>
               <p class='imgprice'>￥{{item.Price}}</p>
           </div>
         </a>
       </div>
       <div class='brandImg2'>
       	   <h3>积分兑换</h3>
	       <dl v-for='item in data.CreditDeduct'>
	         <router-link :to="{name:'shopDetail',params:{ProductID:item.ProductID} }">
	           <dt>
	             <img v-lazy='item.Pictures'>
	           </dt>
	           <dd>
	             <p class='imgtit'>{{item.Subject}}</p>
	             <p class='imgprice'>￥{{item.CreditDeductAmount}}+{{item.Credit}}积分</p>
	             <p class="imglowPrice">￥{{item.Price}}</p>
	           </dd>
	          </router-link>
	       </dl>
	    </div>
   </div>
</template>
<script>
export default {
 data () {
   return {
     data:[]
   }
 },
 created () {
    let ProductID=this.$route.params.ProductID;
    this.$http.jsonp('http://m.haimi.com/api/credit/split-product-list',{jsonp:"_callback"}).then(function (res) {
         this.data = res.data.data.Products;
     })   
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.recomm{
with: 100%;
font-size: 14px;
margin-bottom: 50px;
h3{
  width: 100%;
  font-size:14px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
}
.brandImg{
width: 100%;
display: flex;
flex-wrap: wrap;
a{
  width: 50%;
  overflow: hidden;
  display: block;
  float: left;
  margin-bottom: 5px;
  position: relative;
  .brandImgWord{
    width: 100%;
    background: #fff;
    text-align: left;
    font-size: 12px;
    .imgimg{
	  width: 100%;
	  position: relative;
	  span{
	  	position: absolute;
	  	top: 39%;
	  	left: 27%;
	  	color: #fff;
	  	strong{
	  		font-size: 22px;
	  	}
	  }
    }
    .imgtit{
      padding-left: 10px;
      line-height: 18px;
    }
    .imgInte{
     color: #991f33;
     padding-left: 10px;
     line-height: 18px;
    }
    .imgprice{
     color: #999;
     text-decoration: line-through;
     padding-left: 10px;
     line-height: 18px;
     padding-bottom: 10px; 
    }
  }
  &:nth-child(even){
    padding-left: 2.5px;
    box-sizing: border-box;
  }
  &:nth-child(odd){
    padding-right: 2.5px;
    box-sizing: border-box;
  }
}
}
.brandImg2{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	dl{
	  width: 50%;
	  overflow: hidden;
	  display: block;
	  float: left;
	  margin-bottom: 5px;
	  position: relative; 
	  a{
	    display: inline-block;
	    width: 100%;
	    background: #fff;
	    dt{
	      width: 100%;
	      height: 150px;
	      overflow: hidden;
	      img{
	        width: 100%;
	      }
	    }
	    dd{
	      font-size: 12px;
	      text-align: left;
	      margin-left: 5px;
	      .imgtit{
	        overflow: hidden;
	        text-overflow: ellipsis;
	        white-space: nowrap;
	        height: 30px;
	        line-height: 30px;
	      }
	      .imgprice{
	        padding-bottom: 10px;
	        color: #991f33;
	      }
	      .imglowPrice{
	      	text-decoration: line-through;
	      	color: #999;
	      }
	    }
	  }
	  &:nth-child(even){
	    padding-right: 2.5px;
	    box-sizing: border-box;
	  }
	  &:nth-child(odd){
	    padding-left: 2.5px;
	    box-sizing: border-box;
	  }
	}
}
 
</style>
