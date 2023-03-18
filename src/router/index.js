import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
// import ProjectView from '@/views/ProjectView.vue'
// import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects/',
      component: () => import('@/views/ProjectsView.vue'),
      props:true
      // component: ProjectsView,
      
    }
    ,{
        path: '/projects/:id',
        name: 'project',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: ProjectDetail,
        component: () => import('@/views/ProjectDetail.vue'),
        props:true
        // component: ProjectsView
      }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('@/views/AboutView.vue')
    //   // component: AboutView
    // }
  ]
})

export default router
