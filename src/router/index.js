import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('@/pages/register')
  },

  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/pages/password-reset')
  },

  {
    path: '/wallet',
    name: 'wallet',
    component: () => import('@/pages/wallet')
  },

  {
    path: '/wallet/manage',
    name: 'wallet-manage',
    component: () => import('@/pages/wallet-manage')
  },

  {
    path: '/purchase',
    name: 'purchase',
    component: () => import('@/pages/purchase')
  },

  {
    path: '/ifastlane',
    name: 'ifastlane',
    component: () => import('@/pages/ifastlane')
  },

  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/pages/settings')
  },

  {
    path: '/ad-viewer',
    name: 'ad-viewer',
    component: () => import('@/pages/ad-viewer')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (!['login', 'register'].includes(to.name) && !store.getters['user/loggedIn']) {
    return next({ name: 'login' })
  }
  next()
})

export default router
