import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/credits',
            name: 'credits',
            component: () => import('../views/CreditsView.vue'),
        },
        {
            path: '/contributors',
            name: 'contributors',
            component: () => import('../views/ContributorsView.vue'),
        }
    ],
})


export default router;