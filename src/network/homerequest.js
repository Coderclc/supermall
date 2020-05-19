import { request } from "./request";
function requestHomeData() {
  return request({
    url: "/home/multidata"
  });
}
function requestHomeWares(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  });
}
export { requestHomeData, requestHomeWares };
