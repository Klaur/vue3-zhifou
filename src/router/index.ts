import { createRouter, createWebHistory, RouterHistory } from 'vue-router'
const routerHistory: RouterHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName:"home" */ '@/views/home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName:"login" */ '@/views/login.vue')
    },
    {
      path: '/column/:id',
      name: 'column',
      component: () => import(/* webpackChunkName:"login" */ '@/views/column.vue')
    },
    {
      path: '/columnDetail/:id',
      name: 'columnDetail',
      component: () => import(/* webpackChunkName:"login" */ '@/views/columnDetail.vue')
    }
  ]
})
export default router
