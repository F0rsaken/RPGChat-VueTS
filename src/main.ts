import Vue from 'vue'
import App from './App.vue'
import router from './router'

// global styles
import './assets/styles/grid/simple-grid.scss'
import './assets/styles/style.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
