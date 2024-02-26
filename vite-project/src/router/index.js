import { createRouter, createWebHistory } from 'vue-router'
import GardenView from '../views/GardenView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'garden',
      component: GardenView
    },
    {
      path: '/bouquet',
      name: 'bouquet',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BouquetView.vue')
    }
  ]
})

export default router
