import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useUserStore } from '@/stores/user'
import App from '@/App.vue'
import router from '@/router'

import '@/assets/main.css'


const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)



app.mount('#app')


const userStore = useUserStore()