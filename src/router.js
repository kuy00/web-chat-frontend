import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('./components/HelloWorld.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router