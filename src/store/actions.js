import {ALREADY,NO_YET} from "./mutations_types"
export default  {
  addToCart({state,commit},payLoad){
    const item=state.cartList.find(item=>item.id==payLoad.product.id)
    if(item){
      commit({type:ALREADY,item})
    }else {
      commit({type:NO_YET,payLoad})
    }
  }
}
