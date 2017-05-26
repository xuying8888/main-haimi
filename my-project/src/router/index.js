import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import homePage from '@/view/home/index'
import juHome from '@/view/home/children/juHome'
import recommendPage from '@/view/home/children/recommendPage'
import searchPage from '@/view/home/children/search'
import typePage from '@/view/typepage/index'
import typecont from '@/view/typepage/children/typecont'
import typetype from '@/view/typepage/children/typetype'
import bought from '@/view/bought/index'
import myCont from '@/view/mycont/index'
import shopDetail from '@/view/shopDetail'
import successPage from '@/view/success/index'
import shouCang from '@/view/shouCang/'
import discount from '@/view/discount/'
import canUse from '@/view/discount/children/canUse'
import alreadyUse from '@/view/discount/children/alreadyUse'
import cannotUse from '@/view/discount/children/connotUse'
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
    }
   
  ]
})
