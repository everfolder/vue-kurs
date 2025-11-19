import { createRouter, createWebHistory } from 'vue-router'

import MainScreen from '@/components/pages/Main-screen.vue'
import AboutPage from '@/components/pages/AboutPage.vue'
import ContactPage from '@/components/pages/ContactPage.vue'
import HeartPage from '@/components/pages/HeartPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainScreen
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
    },
    {
        path: '/contact',
        name: 'cta',
        component: ContactPage
    },
    {
        path: '/heart',
        name: 'heart',
        component: HeartPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
