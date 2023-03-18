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

app.use(pinia)
app.use(router)
app.use(SharedElementDirective, {easing: "ease",  duration: "300ms",  endDuration: "150ms",  zIndex: 99999,  compositeOnly: false,  includeChildren: false})

router.beforeEach(SharedElementRouteGuard)

app.mount('#app')


// const userStore = useUserStore()
// const reposStore = useReposStore()
