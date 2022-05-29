import { createWebHistory, createRouter } from 'vue-router'
import store from '../store'
import ChatList from '../views/ChatList.vue'
import UserList from '../views/UserList.vue'
import Login from '../views/Login.vue'
import Socket from '../components/Socket.vue'

const checkAuth = () => (to, from, next) => {
  if (store.getters.isAuth) {
    if (to.path === '/') {
      next('/user/list')
    } else {
      next()
    }
  }
  next('/')
}

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => Login,
    beforeEnter: checkAuth(),
  },
  {
    path: '/chat/list',
    name: 'chat/list',
    component: () => ChatList,
    beforeEnter: checkAuth(),
  },
  {
    path: '/user/list',
    name: 'user/list',
    component: () => UserList,
    beforeEnter: checkAuth(),
  },
  {
    path: '/socket',
    name: 'socket',
    component: () => Socket,
    beforeEnter: checkAuth(),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
