// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import direcNav from './directive/direcNav'
Vue.use(vueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  try: 3 // default 1
})
Vue.directive('direc-nav',direcNav)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  directives:{
  	direcNav
  }
})
