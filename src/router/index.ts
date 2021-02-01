import { createRouter, createWebHistory, RouterHistory } from 'vue-router'
const routerHistory: RouterHistory = createWebHistory()
// import store from '@/store'
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
      component: () => import(/* webpackChunkName:"login" */ '@/views/login.vue'),
      meta: { redirectAlreadyLogin: true }
    },
    {
      path: '/column/:id',
      name: 'column',
      component: () => import(/* webpackChunkName:"login" */ '@/views/column.vue')
    },
    {
      path: '/column/:columnId/article/create',
      name: 'createArticle',
      component: () => import(/* webpackChunkName:"login" */ '@/views/createArticle.vue'),
      meta: { requiredLogin: true }
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  next()
  // const { login } = store.state
  // console.log(login)
  // if (!login) {
  //   const res = await store.dispatch('checkUser', to.path === '/login')
  //   console.log(res, '121212')
  //   if (res) {
  //     to.path === '/login' ? next('/') : next()
  //   } else {
  //     to.path === '/login' ? next() : next('/login')
  //   }
  // } else {
  //   to.path === '/login' ? next('/') : next()
  // }
  // if (to.meta.requiredLogin && !store.state.login) {
  //   next({ name: 'login' })
  // } else if (to.meta.redirectAlreadyLogin && store.state.login) {
  //   next({ name: 'home' })
  // } else {
  //   next()
  // }
})
export default router
