// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/app',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/app',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: '/extincteur',
        name: 'Extincteur',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Extincteur" */ '@/views/Extincteur.vue'),
      },
      {
        path: '/parcs',
        name: 'Parcs',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Parcs" */ '@/views/Parcs.vue'),
      },
      {
        path: '/parc',
        name: 'Parc',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Parcs" */ '@/views/Parc.vue'),
      },
      {
        path: '/intervention',
        name: 'Intervention',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Parcs" */ '@/views/Interventions.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
