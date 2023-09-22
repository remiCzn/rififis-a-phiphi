import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import Lobby from "./views/Lobby.vue";
import Game from "./views/Game.vue";

const routes = [
    {path: '', name: 'lobby', component: Lobby},
    {path: '/game', name: 'game', component: Game},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});


createApp(App).use(router).mount('#app')
