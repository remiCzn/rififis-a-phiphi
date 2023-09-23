import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router";
import Lobby from "./views/Lobby.vue";
import Game from "./views/Game.vue";
import Main from "./views/Main.vue"
import { createPinia } from 'pinia';

const pinia = createPinia();

const routes = [
    { path: '/lobby', name: 'lobby', component: Lobby },
    { path: '/game', name: 'game', component: Game },
    { path: '/', name: "main", component: Main }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});


createApp(App).use(router).use(pinia).mount('#app')
