import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // Base routes
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
  // Coins
  {
    path: '/coin/:coin',
    name: 'coin',
    component: () => import('@/views/CoinView.vue')
  },
  // Not found error
  {
    path: '/NotFound',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue')
  },
  {
    path: "/:catchAll(.*)",
    redirect: { 
      name: 'NotFound',
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
