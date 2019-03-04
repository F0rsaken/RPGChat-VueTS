import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { serviceManager } from './plugins/service-manager';

// global styles
import './assets/styles/grid/grid.scss'
import './assets/styles/style.scss'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(serviceManager)
// console.log('main.ts');

var vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
