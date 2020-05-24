import {ALREADY,NO_YET} from "./mutations_types"
export default  {
  addToCartActions({state,commit},payLoad){
    return new Promise((resolve,reject)=>{
      const item=state.cartList.find(item=>item.id==payLoad.product.id)
      if(state.cartList.length==0) state.isAllClick=true
      if(item){
        commit({type:ALREADY,item})
        resolve("当前的数目➕1")
      }else {
        commit({type:NO_YET,payLoad})
        resolve("添加新商品成功")
      }
    })
  }
}
