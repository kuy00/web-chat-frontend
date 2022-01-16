import { createWebHistory, createRouter } from "vue-router";

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router