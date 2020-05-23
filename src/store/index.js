import Vuex from "vuex";
import Vue from "vue";
import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"
import moduleA from "./modules/moduleA"
Vue.use(Vuex);
const state={
  imgOnLoad:0,
  cartList:[],
  isAllClick: false
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    moduleA
  }
});
export default store;
