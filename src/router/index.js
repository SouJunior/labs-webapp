import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistryView from '../views/RegistryView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductView from '../views/ProductView.vue'
import SquadView from '../views/SquadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/registry',
      name: 'registry',
      component: RegistryView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/products',
      name: 'profile',
      component: ProductsView
    },
    {
      path: '/product/1',
      name: 'product-by-id',
      component: ProductView
    },
    {
      path: '/squad',
      name: 'squad',
      component: SquadView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
