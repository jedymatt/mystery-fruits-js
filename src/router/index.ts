import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NProgress from 'nprogress';

const routes: RouteRecordRaw[] = [
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
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
})


router.beforeResolve((to) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start()
    }
})

router.afterEach(() => {
    // Complete the animation of the route progress bar.
    NProgress.done()
})

export default router;
