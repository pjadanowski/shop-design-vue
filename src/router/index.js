import {
    createRouter,
    createWebHistory
} from 'vue-router';

import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'
import Contact from '../pages/Contact.vue'
import About from '../pages/About.vue'


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router