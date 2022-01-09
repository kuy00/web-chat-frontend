import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('./components/HelloWorld'),
    },
    {
        path: '/socket',
        name: 'socket',
        component: () => import('./components/Socket'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router