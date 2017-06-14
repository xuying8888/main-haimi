<template>
  <div class='success'>
     <div class="mainSuccess">
        <dl class="introMain">
          <dt>
            <label>
                <input type="file">
                 <img src="//m.haimi.com/static/images/web/default-avatar-square.png?imageView2/1/w/100/h/100" alt="">
            </label>
          </dt>
          <dd>
            <p>
              <input type="text" value='海蜜_v5vf2t'>
              <i class='iconfont icon-xiugai'></i>
            </p>
          </dd>
        </dl>
        <div class="order-form">
          <router-link to='/myOrder'>
            <h3>我的订单<span>查看全部订单</span></h3>
            <div class="orderform-type">
              <dl v-for='item in getOrderType'>
                <dt><i :class='item.icon'></i></dt>
                <dd>{{item.word}}</dd>
              </dl>
            </div>
          </router-link>
        </div>
        <div class="service">
          <ul>
            <li v-for='item in getService'>
              <router-link :to='item.link'>
                <i :class='item.icon'></i><span>{{item.word}}</span><span class="serviceCont">{{item.cont}}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <h3 class="back" @click='backDeng'><router-link to='/myCont?to=successPage'>退出登陆</router-link></h3>
     </div>
     <footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from '@/components/footerNav/'
import '@/static/css/iconfont.css'
export default {
  name:'successPage',
  data () {
  	return {
  		getTypeTypeList: [],
      getOrderType: [
        {
          icon:'iconfont icon-daifukuan',
          word:'待付款'
        },
        {
          icon:'iconfont icon-daifahuo',
          word:'待发货'
        },
        {
          icon:'iconfont icon-daishouhuo',
          word:'待收货'
        },
        {
          icon:'iconfont icon-daipingjia',
          word:'待评价'
        },
        {
          icon:'iconfont icon-wode',
          word:'退款'
        }
      ],
      getService: [
        {
          icon:'iconfont icon-shoucang',
          word:'收藏宝贝',
          cont:'',
          link:'/shouCang'
        },
        {
          icon:'iconfont icon-youhuiquan',
          word:'红包优惠券',
          cont:'',
          link:'/discount'
        },
        {
          icon:'iconfont icon-zuji',
          word:'足迹',
          cont:'',
          link:'/footSize'
        },
        {
          icon:'iconfont icon-jifen',
          word:'积分商城',
          cont:'',
          link:'/myIntegral'
        },
        {
          icon:'iconfont icon-shouhuodizhi',
          word:'收货地址',
          cont:'',
          link:'/addressSend'
        },
        {
          icon:'iconfont icon-bangdingshouji',
          word:'绑定手机',
          cont:'18510422054',
          link:'/telephone'
        },
        {
          icon:'iconfont icon-icon052',
          word:'海密客服',
          cont:'',
          link:''
        }
      ]
  	}
  },
  components:{
    footerNav
  },
  methods: {
    backDeng() {
      window.localStorage.clear()
    }
  }
}
</script>
<style lang='less' scoped>
.success{
  width: 100%;
  margin-bottom: 60px;
  .mainSuccess{
    text-align: left;
    .introMain{
      padding: 10px;
      background: #fff;
      margin-bottom: 10px;
      display: flex;
      dt{
        width: 3.3rem;
        height: 3.3rem;
        margin-right: 10px;
        input{
          display: none;
        }
        
      }
      dd{
        line-height: 3.3rem;
        font-size: 12px;
        input{
          width: 80px;

        }
        i{
          padding-left: 10px;
          color: #ccc;
        }
      }
    }
    .order-form{
      background: #fff;
      h3{
        padding-left: 10px;
        height: 35px;
        line-height: 35px;
        border: 1px solid #eee;
        position: relative;
        span{
          color: #ccc;
          position: absolute;
          top: 0;
          right: 10px;
        }
      }
      .orderform-type{
        display: flex;
        justify-content: space-around;
        padding-top: 15px;
        padding-bottom: 10px;
        text-align: center;
        font-size: 12px;
        margin-bottom: 10px;
        dl dt i{
          font-size: 22px;
          color: #666;
          font-weight: 600;
        }
      }
    }
    .service{
      background: #fff;
      padding-left: 10px;
      padding-right: 10px;
      margin-bottom: 10px;
      li{
        height: 38px;
        line-height: 38px;
        border-bottom: 1px solid #eee;
        font-size: 12px;
        position: relative;
        i{
          color: #999;
          font-size: 18px;
          font-weight: 500;
          padding-left: 5px;
        }
        span{
          padding-left: 5px;
        }
        .serviceCont{
          color: #ccc;
          position: absolute;
          top: 0;
          right: 10px;
        }
      }
    }
    .back{
      height: 35px;
      line-height: 35px;
      text-align: center;
      background: #fff;
      font-size: 14px;
    }
  }
}
</style>

