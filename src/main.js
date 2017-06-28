import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import './mock/mockAPI' //引入模块执行即可
import App from './App'
import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'

import 'common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter({
  linkActiveClass: 'active'
})

router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
})

router.start(App, '#app')

router.go('/goods')
