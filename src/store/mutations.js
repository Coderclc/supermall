import {ALREADY,NO_YET} from "./mutations_types"
export default {
  imgLoaded(state) {
    state.imgOnLoad++;
  },
  [ALREADY](state, payLoad) {
    payLoad.item.count++;
  },
  [NO_YET](state, payLoad) {
    payLoad.payLoad.product.count = 1;
    state.cartList.push(payLoad.payLoad.product);
  }
};
