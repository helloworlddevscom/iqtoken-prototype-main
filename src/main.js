import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueNumber from 'vue-number-animation'
import './registerServiceWorker'
import router from './router'
import store from './store'
import mobileView from './utils/mobileView'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './global.scss'
import 'animate.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueNumber)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

mobileView()
