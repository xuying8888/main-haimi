import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import homePage from '@/view/home/index'
import typePage from '@/view/typepage/index'
import bought from '@/view/bought/index'
import myCont from '@/view/mycont/index'
import recommendPage from '@/view/home/children/recommendPage'
import juHome from '@/view/home/children/juHome'
import typecont from '@/view/typepage/children/typecont'
import typetype from '@/view/typepage/children/typetype'
import shopDetail from '@/view/shopDetail'
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
      path: '/myCont',
      component: myCont
    },
    {
      path: '/shopDetail/:ProductID',
      name:'shopDetail',
      component: shopDetail
    }
  ]
})
