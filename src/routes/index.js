import { createWebHistory, createRouter } from 'vue-router'
import store from '../store'
import ChatList from '../views/ChatList.vue'
import UserList from '../views/UserList.vue'
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
    name: 'user/list',
    component: () => UserList,
    beforeEnter: requireAuth(),
  },
  {
    path: '/chat/list',
    name: 'chat/list',
    component: () => ChatList,
    beforeEnter: requireAuth(),
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
