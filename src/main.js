import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import {
  createSharedElementDirective,
  SharedElementRouteGuard,
  SharedElementDirective
} from 'v-shared-element'

import App from './App.vue'
import router from './router/'

import '@/assets/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(SharedElementDirective, {})
app.use(pinia)
app.use(router)

app.mount('#app')

router.beforeEach(SharedElementRouteGuard)

// const userStore = useUserStore()
// const reposStore = useReposStore()
