import Vue from 'vue'
import App from './App.vue'
import router from './router'

// global styles
import './assets/styles/grid/grid.scss'
import './assets/styles/style.scss'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
