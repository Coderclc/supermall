import axios from "axios";
import NProgress from "nprogress";//进度条展示模块
import "nprogress/nprogress.css";

export function request(config) {
  // 创建axios的instance,定义实例配置
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/n3",
    timeout: 5000
  });
  // 拦截request config 
  instance.interceptors.request.use(
    config => {
      NProgress.start();
      return config;
    },
    err => {}
  );
  // 拦截response data
  instance.interceptors.response.use(
    res => {
      NProgress.done();
      return res.data;
    },
    err => {}
  );
  return instance(config);
}
