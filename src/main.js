// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import Forecast from './pages/detail/forecast'
import Analysis from './pages/detail/analysis'
import Count from './pages/detail/count'
import Publish from './pages/detail/publish'
Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
	mode: 'history',
	routes: [
    {
    	path: '/',
		  component: IndexPage
    },
    {
      path: '/detail',
      redirect: '/detail/forecast',
      component: DetailPage,
      children: [
        {
          path:'forecast',
          component: Forecast
        },
        {
          path:'analysis',
          component: Analysis
        },
        {
          path:'count',
          component: Count
        },
        {
          path:'publish',
          component: Publish
        },
      ]
    }
	]
})

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
