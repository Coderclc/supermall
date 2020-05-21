import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
// 路由的懒加载
const Home = () => import("views/home/Home");
const Catalog = () => import("views/catalog/Catalog");
const Shopping = () => import("views/shopping/Shopping");
const Profile = () => import("views/profile/Profile");
const Details = () => import("views/details/Details")

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    meta: {
      title: "home"
    },
    component: Home
  },
  {
    path: "/catalog",
    meta: {
      title: "catalog"
    },
    component: Catalog
  },
  {
    path: "/shopping",
    meta: {
      title: "shopping"
    },
    component: Shopping
  },
  {
    path: "/profile",
    meta: {
      title: "profile"
    },
    component: Profile
  },
  {
    path: "/details", 
    meta: {
      title: "details"
    },
    component: Details
  }
];

const router = new Router({
  routes,
  mode: "history"
});
// 进入路由前置守卫切换标题
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});

export default router;
