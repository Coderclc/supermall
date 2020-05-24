import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store/index"
import toast from "components/common/toast"
import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"

// resolve 300ms delay of mobile terminal
FastClick.attach(document.body)
// install custom plugin toast
Vue.use(toast)
Vue.config.productionTip = true
// Vue.prototype.$bus= new Vue()
// realize img lazyload
Vue.use(VueLazyLoad,{
  loading:require("assets/img/common/placeHolder.jpg")
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
