import { createApp } from 'vue'
import App from './App.vue'
import Router from "@/router/index.js";
import "@/styles/theme.scss"

createApp(App)
    .use(Router)
    .mount('#app')
