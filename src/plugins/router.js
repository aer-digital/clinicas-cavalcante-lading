import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", name: 'Home', component: () => import("../views/index/Home.vue") },
    { path: "/comming-soon", name: 'Terms', component: () => import("../views/comming-soon/CommingSoon.vue") },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;