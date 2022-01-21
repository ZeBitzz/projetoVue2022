import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Manager from "../views/Manager.vue";
import store from "../store/index.js";
import Profile from "../views/Profile.vue";
import Tutorial from "../views/Tutorial.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: { public: false, layout: "dashboard" },
  },
  {
    path: "/manager",
    name: "manager",
    component: Manager,
    meta: { public: false, layout: "dashboard" },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: { public: false, layout: "dashboard" },
  },
  {
    path: "/tutorial/:id",
    name: "tutorial",
    component: Tutorial,
    meta: { public: false, layout: "dashboard" },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.getLoggedUser) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
