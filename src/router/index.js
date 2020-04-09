import Vue from "vue";
import Router from "vue-router";
import AuthGuard from "./guard";
import Home from "@/components/Home";
import Ad from "@/components/Ads/Ad";
import AdList from "@/components/Ads/AdList";
import NewAd from "@/components/Ads/NewAd";
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";
import Orders from "@/components/User/Orders";
import guard from "./guard";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      name: "home",
      component: Home
    },
    {
      path: "/ad/:id",
      props: true,
      name: "ad",
      component: Ad
    },
    {
      path: "/list",
      name: "list",
      component: AdList,
      beforeEnter: AuthGuard
    },
    {
      path: "/new",
      name: "newAd",
      component: NewAd,
      beforeEnter: AuthGuard
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "reg",
      component: Register
    },
    {
      path: "/orders",
      name: "orders",
      component: Orders,
      beforeEnter: AuthGuard
    }
  ],
  mode: "history"
});
