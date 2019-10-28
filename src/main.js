import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from './components/header/index.vue'
import Footer from './components/layout/footer.vue'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
//break輪播
import VueCarousel from 'vue-carousel'
Vue.use(VueCarousel);
// DatePicker
import Datepicker from 'vuejs-datepicker'
Vue.component(Datepicker);
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import $ from 'jquery'
Vue.use($);
//home highchart
Vue.config.productionTip = false
Vue.component('Header', Header)
Vue.component('Footer', Footer)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')