import { createWebHistory, createRouter } from "vue-router";
import store from '../store'

const requireAuth = () => (to, from, next) => {
  if (store.getters.isAuth) {
    return next();
  }
  next('/login');
};

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login"),
  },
  {
    path: "/socket",
    name: "socket",
    component: () => import("../components/Socket"),
    beforeEnter: requireAuth(),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router