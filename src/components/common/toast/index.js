import Toast from "./Toast"
const obj = {}
obj.install=(Vue)=>{
  // 创建组件构造器 class
  const toastConstructor = Vue.extend(Toast)
  // 创建组件构造器的实例
  const toast = new toastConstructor
  // vm.$mount() 手动地挂载一个未挂载的实例到div上
  toast.$mount(document.createElement("div"))
  // 将toast Dom对象 添加到body中
  document.body.appendChild(toast.$el)
  // 将组件实例添加到Vue的原型中
  Vue.prototype.$toast=toast
}


export default obj