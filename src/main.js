import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import vuex from './store'
Vue.prototype.$store=vuex
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuex,
  mounted(){

  },
  render: h => h(App)
})
