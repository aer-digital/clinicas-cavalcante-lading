import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", name: 'Home', component: () => import("../views/index/Home.vue") },
    { path: "/via-saude", name: 'Via Saúde', component: () => import("../views/via-saude/ViaSaude.vue") },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;