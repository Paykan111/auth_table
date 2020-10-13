import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/Auth.vue'

const routes = [
  {
    path: '/auth/login',
    name: 'Auth',
    component: Auth,
    props: true
  },
  {
    path: '/table',
    name: 'Table',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Table.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
