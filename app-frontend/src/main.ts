import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/plugins/router'
import './assets/base.scss'

createApp(App).use(router).mount('#app')
