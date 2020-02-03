import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/product",
    name: "product",
    component: () => import(/* webpackChunkName: "product" */ "../views/ProductDetails")
  },
  {
    path: "/trend-now",
    name: "trend",
    component: () => import(/* webpackChunkName: "product" */ "../views/TrendNow")
  },
  {
    path: "/makeup",
    name: "makeup",
    component: () => import(/* webpackChunkName: "makeup" */ "../views/Makeup")
  },
  {
    path: "/nail",
    name: "nail",
    component: () => import(/* webpackChunkName: "nail" */ "../views/Nail")
  },
  {
    path: "/beauty-accessories",
    name: "beauty-accessories",
    component: () =>
      import(/* webpackChunkName: "beauty-accessories" */ "../views/BeautyAccessories")
  },
  {
    path: "/body-art",
    name: "body-art",
    component: () => import(/* webpackChunkName: "body-art" */ "../views/BodyArt")
  },
  {
    path: "/makeup-tools",
    name: "makeup-tools",
    component: () => import(/* webpackChunkName: "makeup-tools" */ "../views/MakeupTools")
  },
  {
    path: "/fragance",
    name: "fragance",
    component: () => import(/* webpackChunkName: "fragance" */ "../views/Fragance")
  },
  {
    path: "/lookbook",
    name: "lookbook",
    component: () => import(/* webpackChunkName: "lookbook" */ "../views/LookBook")
  },
  {
    path: "/register",
    name: "register",
    component: () => import(/* webpackChunkName: "register" */ "../views/Register")
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: () => import(/* webpackChunkName: "wishlist" */ "../views/Wishlist")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/TheCart")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active-link"
});

export default router;
