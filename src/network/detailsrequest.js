import { request } from "./request";
function requestDetailsData(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}
function requestDetailsRecommend() {
  return request({
    url: "/recommend",

  });
}
// 详情页商品信息集合
class information {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
  }
}
// 详情页商铺信息集合
class shopInformation{
  constructor(shop){
    this.shopLogo=shop.shopLogo
    this.name=shop.name
    this.score=shop.score
    this.cgoods=shop.cGoods
    this.csells=shop.cSells
  }
}

export { requestDetailsData,requestDetailsRecommend};
export { information,shopInformation};
