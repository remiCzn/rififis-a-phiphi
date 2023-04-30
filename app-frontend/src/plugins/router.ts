import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {path: '', name:'lobby', component: () => import('@/views/Lobby.vue')},
    {path: '', name:'game', component: () => import('@/views/Game.vue')},
]

const router = createRouter(
    {
        routes,
        history: createWebHistory(),
    }
)

export default router