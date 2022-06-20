import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/coins',
    name: 'coins',
    component: () => import('@/views/CoinsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/NotFound',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue')
  },
  {
    path: "/:catchAll(.*)",
    redirect: { 
      name: 'NotFound',
      params: { resource: 'Page' } 
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
