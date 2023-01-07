import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // Base routes
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */'@/views/HomeView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */'@/views/ContactView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */'@/views/AboutView.vue')
  },
  // Coins
  {
    path: '/coins',
    name: 'coins',
    component: () => import(/* webpackChunkName: "favouriteCoins" */'@/views/CoinsView.vue')
  },
  {
    path: '/coin/:coin',
    name: 'coin',
    component: () => import(/* webpackChunkName: "coinDetails" */'@/views/CoinView.vue')
  },
  // Not found error
  {
    path: '/NotFound',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notFound" */'@/views/NotFoundView.vue')
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
