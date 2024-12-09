import About from '@/components/About.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/Home.vue')
    },
    {
       path: '/about',
       name: 'about',
       component: About
    }
  ]
})

export default router
