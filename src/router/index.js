import { createRouter, createWebHashHistory } from 'vue-router'
const LayOut = () => import('@/layout/index.vue')
const routes = [
  {
    path: '/',
    name: 'layout',
    component: LayOut
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
