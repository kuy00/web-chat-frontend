import { createWebHistory, createRouter } from 'vue-router'
import store from '../store'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Socket from '../components/Socket.vue'

const requireAuth = () => (to, from, next) => {
  if (store.getters.isAuth) {
    return next()
  }
  next('/login')
}

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => Main,
  },
  {
    path: '/login',
    name: 'login',
    component: () => Login,
  },
  {
    path: '/socket',
    name: 'socket',
    component: () => Socket,
    beforeEnter: requireAuth(),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
