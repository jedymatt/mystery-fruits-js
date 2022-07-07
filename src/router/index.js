import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NProgress from 'nprogress';

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


router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start()
    }
    next()
})

router.afterEach(() => {
    // Complete the animation of the route progress bar.
    NProgress.done()
})

export default router;