import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import WinnersList from '@/components/WinnersList.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/winners',
        name: 'Winners',
        component: WinnersList,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
