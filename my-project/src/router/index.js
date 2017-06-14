import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import homePage from '@/view/home/index'
import juHome from '@/view/home/children/juHome'
import recommendPage from '@/view/home/children/recommendPage'
import searchPage from '@/components/search/'
import typePage from '@/view/typepage/index'
import typecont from '@/view/typepage/children/typecont'
import typetype from '@/view/typepage/children/typetype'
import typecontPage from '@/view/typepage/children/typecontPage'
import bought from '@/view/bought/index'
import myCont from '@/view/mycont/index'
import shopDetail from '@/view/shopDetail'
import successPage from '@/view/success/index'
import myOrder from '@/view/success/children/myOrder'
import xiangguan from '@/view/success/component/xiangguan'
import footSize from '@/view/success/children/footSize'
import addressSend from '@/view/success/children/addressSend'
import editAddress from '@/view/success/children/editAddress'
import telephone from '@/view/success/children/telephone'
import shouCang from '@/view/shouCang/'
import discount from '@/view/discount/'
import canUse from '@/view/discount/children/canUse'
import alreadyUse from '@/view/discount/children/alreadyUse'
import cannotUse from '@/view/discount/children/connotUse'
import myIntegral from '@/view/myIntegral/'
import Integralmall from '@/view/myIntegral/children/Integralmall'
import IntegrationDetails from '@/view/myIntegral/children/IntegrationDetails'
import ExchangeRecord from '@/view/myIntegral/children/ExchangeRecord'
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: 'homePage',
      component: Hello,
      children: [   
        {
          path: 'homePage',
          name: 'homePage',
          redirect: 'homePage/recommendPage/2',
          component: homePage,
          children:[
            {
               path: 'recommendPage/:id',
               name: 'recommendPage',
               component: recommendPage
            },
            {
               path: 'juHome/:id',
               component: juHome
            }
          ]
        },
        {
          path: 'typePage',
          redirect: 'typePage/typecont',
          component: typePage,
          children:[
            {
               path: 'typecont',
               name: 'typecont',
               component: typecont
            },
            {
               path: 'typetype',
               component: typetype
            }
          ]
        },
        {
          path: 'bought',
          component: bought
        }
      ]
    },
    {
      path: '/shopDetail/:ProductID',
      name:'shopDetail',
      component: shopDetail
    },
    {
       path: '/searchPage',
       component: searchPage
    },
    {
      path: '/myCont',
      component: myCont
    },
    {
       path: '/successPage',
       name:'successPage',
       component: successPage,
       beforeEnter: (to,from,next) => {
         var user = window.localStorage['userInfor'];
         console.log(to)
         if( !user ){
           next({ path:'/myCont',query:{"to":to.name}})
         }else{
           next()
         }
      }
    },
    {
      path: '/shouCang',
      component: shouCang
    },
    {
      path: '/discount',
      redirect: 'discount/canUse',
      component: discount,
      children:[
        {
          path: 'canUse',
          name:'canUse',
          component: canUse
        },
        {
          path: 'alreadyUse',
          name:'alreadyUse',
          component: alreadyUse
        },
        {
          path: 'cannotUse',
          name:'cannotUse',
          component: cannotUse
        }
      ]
    },
    {
       path:'/typecontPage/:pageId',
       component: typecontPage
    },
    {
      path:'/myOrder',
      component: myOrder,
      redirect: 'myOrder/xiangguan/1',
      children:[
        {
          path:'xiangguan/:id',
          name:'xiangguan',
          component: xiangguan
        }
      ]
    },
    {
      path:'/footSize',
      component: footSize
    },
    {
      path:'/addressSend',
      component: addressSend
    },
    {
      path: '/editAddress',
      component: editAddress
    },
    {
      path:'/myIntegral',
      redirect: 'myIntegral/Integralmall',
      component: myIntegral,
      children:[
        {
           path:'Integralmall',
           name:'Integralmall',
           component: Integralmall
        },
        {
           path:'IntegrationDetails',
           component: IntegrationDetails
        },
        {
           path:'ExchangeRecord',
           component: ExchangeRecord
        }
      ]
    },
    {
      path: '/telephone',
      component: telephone
    }
   
  ]
})
