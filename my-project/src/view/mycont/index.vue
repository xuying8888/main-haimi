<template>
  <div id='main'>
     <h3>请输入手机号码验证码直接登录</h3>
     <ul class="mywrite">
     	<li>
     		<span>手机号：</span>
     		<input type="text" id='phone' placeholder='请输入您的手机号'>
     		<span class='phoneText' @click='isPhone'>×</span>
     	</li>
     	<li>
     		<span>验证码：</span>
     		<input type="text" id='yanzhengText' placeholder='请输入验证码'>
     		<span class='mywriteright' @click='yanzheng'>发送验证码</span>
     	</li>
     </ul>
     <div class='mybtn'>
     	<button @click='denglu'>登录</button>
      <p id="dengtext"></p>
     </div>
  </div>
</template>

<script>
export default {
  name:'myCont',
  data () {
    return {
      time : 60
    }
  },
  methods: {
  	 isPhone:function(){
  	 	var phone=document.getElementById('phone');
      phone.value=''
	  },
    yanzheng:function(){
      var yanzhengText=document.getElementById('yanzhengText');
      var mywriteright=document.getElementsByClassName('mywriteright')[0];
      var that=this;
      mywriteright.innerHTML='('+this.time+")s";
      var time=setInterval(function(){
        if(that.time<=1){
          mywriteright.innerHTML = '重新获取验证码';
          that.time = '60';
          clearInterval(time);
        } else {
          that.time--;
          mywriteright.innerHTML='('+that.time+")s";
          if(yanzhengText.value !=''){
            mywriteright.innerHTML = '重新获取验证码';
          }
        }
      },1000)
      console.log(this.random (9,0))
    },
    random (max,min) {
      var count=[];
      for(var i=0;i<4;i++){
        count.push(Math.floor( (max-min)*Math.random()+min ));
      }
      count=count.join('');
      return count;
    },
    denglu:function(){
      var dengtext=document.getElementById('dengtext');
      var phoneText=document.getElementsByClassName('phoneText')[0];
      var reg=/^1[3|4|5|7|8]\d{9}$/;
      if(phone.value=='' || yanzhengText.value==''){
        dengtext.innerHTML='请您把信息补充完整'
        setTimeout(function(){
          dengtext.innerHTML=''
        },2000)
      } else {
        dengtext.innerHTML=''
        
        if(phone.value !='' && !(reg.test(phone.value))){ 
          alert("手机号码有误，请重填");
          phoneText.style.display='block';
        }
      }
      if(phone.value!='' && yanzhengText.value!='' && (reg.test(phone.value))){
        //ajax请求
        var userData = {
          userName: 'aaaa',
          userPhone: 1111111,
          userPhoto: '435.jpg'
        }
         var url = this.$route.query.to;
         console.log(url)
         window.localStorage.setItem('userInfor',JSON.stringify(userData))
         this.$router.push({name:url})
      }
      

    }
  }
}
</script>

<style lang='less' scoped>
#main{
	width: 100%;
	height: 100%;
	background: #fff;
	h3{
	  font-size:12px;
		width: 100%;
		height: 32px;
		background: #fff9f3;
		text-align: center;
		line-height: 32px;
		color: #991f33;
	}
	.mywrite{
		padding:0 10px 0 10px;
		li{
			text-align: left;
			height: 34px;
			line-height: 34px;
			border-bottom: 1px solid #ccc;
			font-size: 12px;
			color: #666;
			padding-top: 10px;
			position: relative;
			.mywriteright{
        position: absolute;
        top: 10px;
        right: 0;
        color: #991f33;
			}
      .phoneText{
        display: inline-block;
        width: 17px;
        height: 17px;
        background: #666;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        line-height: 17px;
        font-size: 18px;
        position: absolute;
        right: 8px;
        top: 18px;
        display: none;
      } 
		}
	}
	.mybtn{
		margin: 30px 10px 0 10px;
	    button{
	      width: 100%;
	      display: block;
        text-align: center;
	      line-height: 32px;
	      background: #991f33;
	      border-width: 0;
	      color: #fff;
	      font-size: 14px;
	    }
      #dengtext{
        margin-top: 10px;
        color: #666;
      }
	}
}
</style>
