import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store/index"
Vue.config.productionTip = true
Vue.prototype.$bus= new Vue()
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
