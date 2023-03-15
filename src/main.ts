import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router/'

import '@/assets/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(MotionPlugin)

app.mount('#app')

// const userStore = useUserStore()
// const reposStore = useReposStore()
