<template>
  <div class='myIntegral'>
     <header>
       <p><router-link to='/successPage'><i class='fa fa-angle-left'></i></router-link></p>
       <h3>我的积分</h3>
     </header>
     <section>
       <p class='integral-tit'>
         <span class="inteTit-left">如何获得积分</span>
         <span class="inteTit-right">签到说明</span>
       </p>
       <div class="continuity">
         <h3>已连续签到</h3>
         <p>{{myIntergral.Days}}天</p>
       </div>
       <div class="record">
         <h3>我的积分 <span>{{myIntergral.Accounts}}</span></h3>
         <p>再签到<span>{{myIntergral.AwayFromGift}}</span>天可领取礼包</p>
       </div>
       <div class="time-axis">
         <div class="erery-time" v-for='item in myIntergral.Rules'>
           <p class='timeDate'>{{item.Date}}<p>
           <p class='timeDian'><i></i></p>
           <p class="timeCount">+{{item.Num}}</p>
         </div>
       </div>
     </section>
     <ul class="threeIntegral">
       <li v-for='i in threeIntegralText'>
        <router-link :to='i.link' active-class='on'>{{i.text}}</router-link>
       </li>
     </ul>
     <router-view></router-view>
  </div>
</template>
<script>
import '@/static/css/font-awesome.min.css'
export default {
  name: '',
  data () {
    return {
        myIntergral:[],
        threeIntegralText:[
          {
            text:'积分商城',
            link:"/myIntegral/Integralmall"
          },
          {
            text:'积分明细',
            link:"/myIntegral/IntegrationDetails"
          },
          {
            text:'兑换记录',
            link:"/myIntegral/ExchangeRecord"
          }
        ]
    }
  },
  methods: {
    getMyIntegral() {
      this.$http.get('/api/myIntergral').then(function(response){
        this.myIntergral = response.data.data;
      })
    }
  },
  mounted() {
    this.getMyIntegral()
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.myIntegral{
  width: 100%;
}
header{
  height: 40px;
  background: #f3f3f3;
  text-align: center;
  line-height: 40px;
  position: relative;
  p{
    position: absolute;
    top: 0;
    left: 10px;
    font-size: 22px;
  }
  h3{
    font-size: 14px;
  }
}
section{
  width: 100%;
  background: url(//img.haimi.com/Fp0O_PX3hT3dA-xClon3uy1Sv4wA) no-repeat;
  .integral-tit{
    position: relative;
    font-size: 12px;
    text-align: left;
    margin-bottom: 20px;
    padding-top: 20px;
    .inteTit-left{
      background: url(//img.haimi.com/FlRw9gHnIfiFQo6hR1PDxuBq2vzj) no-repeat;
      background-size: 15px;
      padding-left: 30px;
      background-position: 10px;
    }
    .inteTit-right{
      position: absolute;
      top: 20px;
      right: 10px;
    }
  }
  .continuity{
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background: url(//img.haimi.com/FihU9EoVWoTHbqxpu4VuUoGG5dVJ) no-repeat;
    background-size: 100%;
    color: #fff;
    h3{
      padding-top: 38px;
    }
    p{
      font-size: 16px;
      font-weight: 600;
      padding-top: 5px;
    }
  }
  .record{
    h3{
      font-size: 18px;
      font-weight: 600;
      color: #000;
    }
    p{
      font-size: 12px;
      color: #999;
      padding-top: 5px;
    }
    span{
      color: #cbac81;
    }
  }
  .time-axis{
    display: flex;
    justify-content: center;
    margin-top: 25px;
    padding-bottom: 10px;
    .erery-time{
      width: 40px;
      font-size: 12px;
      .timeDian{
        width: 40px;
        border-bottom: 1px solid #ccc;
        position: relative;
        margin-top: 5px;
        margin-bottom: 5px;
        i{
          display: inline-block;
          width: 4px;
          height: 4px;
          background: #000;
          border-radius: 50%;
          position: absolute;
          top: -1px;
          left: 50%;
        }
      }
    }
  }
}
.threeIntegral{
  display: flex;
  justify-content: space-around;
  padding-left: 10px;
  padding-right: 10px;
  background: #fff;
  height: 35px;
  line-height: 35px;
  font-size: 12px;
  color: #666;
  border-bottom: 1px solid #eee;
  li a{
    display: inline-block;
    height: 35px;
    width: 64px;
  }
}
.on{
  border-bottom: 2px solid #000;
} 
</style>
