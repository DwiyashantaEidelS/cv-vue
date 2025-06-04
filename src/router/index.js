import { createRouter, createWebHistory } from 'vue-router'
import BiodataView from '../views/BiodataView.vue'

const routes = [
  {
    path: '/',
    redirect: '/biodata'
  },
  {
    path: '/biodata',
    // name: 'Biodata',
    component: BiodataView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
