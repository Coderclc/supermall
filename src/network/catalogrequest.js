import { request } from "./request";

function requestCatalogMenu() {
  return request({
    url: '/category',
  });
}

 function requestSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

 function requestSubcategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}

export {
  requestCatalogMenu,requestSubcategory,requestSubcategoryDetail
}