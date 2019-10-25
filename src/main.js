import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from './components/header/header.vue'
import Footer from './components/footer/footer.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/css/frameworkV2.css'
import './assets/css/icon.css'

Vue.config.productionTip = false
Vue.component('Header', Header)
Vue.component('Footer', Footer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
