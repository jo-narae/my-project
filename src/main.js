import Vue from 'vue'
import VueRouter from 'vue-router'
import vClickOutside from 'v-click-outside'
import BootstrapVue from 'bootstrap-vue'
import VueTabs from 'vue-nav-tabs'

// Plugins
import GlobalComponents from './gloablComponents'
import Notifications from './components/UIComponents/NotificationPlugin'
import SideBar from './components/UIComponents/SidebarPlugin'
import App from './App'

// router setup
import routes from './routes/routes'

// library imports
import 'bootstrap/dist/css/bootstrap.css'
import './assets/sass/paper-dashboard.scss'

var VueAutosize = require('vue-autosize')

// plugin setup
Vue.use(VueRouter)
Vue.use(GlobalComponents)
Vue.use(vClickOutside)
Vue.use(Notifications)
Vue.use(SideBar)
Vue.use(BootstrapVue)
Vue.use(VueTabs)
Vue.use(VueAutosize)

// chartjs package
require('chart.js')
// vue-charts package
require('hchs-vue-charts')
Vue.use(VueCharts)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  data: {
  }
})
