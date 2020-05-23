import {
  ALREADY,
  NO_YET,
  INCREMENT,
  REDUCE,
  ALLCHECK,
  CHANGEALLCHECK
} from "./mutations_types";
export default {
  imgLoaded(state) {
    state.imgOnLoad++;
  },
  [ALREADY](state, payLoad) {
    payLoad.item.count++;
  },
  [NO_YET](state, payLoad) {
    payLoad.payLoad.product.count = 1;
    payLoad.payLoad.product.isCheck = true;
    state.cartList.push(payLoad.payLoad.product);
  },
  // monitor button  to modify when count ==0 remove item
  [INCREMENT](state, payLoad) {
    const item = state.cartList.find(item => item.id == payLoad);
    item.count++;
  },
  [REDUCE](state, payLoad) {
    const item = state.cartList.find(item => item.id == payLoad);
    item.count--;
    if (item.count == 0) {
      const index = state.cartList.indexOf(item);
      state.cartList.splice(index, 1);
    }
  },
  // modify item isCheck
  [ALLCHECK](state) {
    state.isAllClick = !state.isAllClick;
    state.cartList.forEach(x=>x.isCheck=state.isAllClick)
  },
  // monitor chage allcheck
  [CHANGEALLCHECK](state, payLoad) {
    state.isAllClick = payLoad;
    if (payLoad&&(state.cartList.filter(x=>!x.isCheck).length==0)) {

    }
  }
};
