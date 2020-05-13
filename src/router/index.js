import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const Home = () => import("views/home/Home");
const Catalog = () => import("views/catalog/Catalog");
const Shopping = () => import("views/shopping/Shopping");
const Profile = () => import("views/profile/Profile");
const routes = [
  {
    path: "",
    redirect:"/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/catalog",
    component: Catalog,
  },
  {
    path: "/shopping",
    component: Shopping
  },
  {
    path: "/profile",
    component: Profile
  }
];
const router= new Router({
  routes,
  mode:"history"
});

export default router

