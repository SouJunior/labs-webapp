import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// user
import RegistryView from '../views/user/RegistryView.vue'
import LoginView from '@/views/user/LoginView.vue'
import ProfileView from '../views/user/ProfileView.vue'

// product 
import ProductsView from '../views/product/ProductsView.vue'
import ProductView from '../views/product/ProductView.vue'
import ProductRegistryView from '../views/product/RegistryView.vue'

// squad 
import SquadsView from '../views/squad/SquadsView.vue'
import SquadView from '../views/squad/SquadView.vue'
import SquadCreateView from '../views/squad/CreateView.vue'

import { useAuthStore } from '@/stores/auth';


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
      component: ProfileView, 
        meta : {
            auth: true
        }
    },
      {
          path: '/products',
          name: 'products',
          component: ProductsView,
          meta : {
              auth: false
          }
      },
    {
      path: '/product/:uuid',
      name: 'product-by-id',
      component: ProductView,
        meta : {
            auth: true
        }
    },
    {
        path: '/product/create',
        name: 'product-create',
        component: ProductRegistryView,
        meta : {
            auth: true,
            update: false 
        }
    },
    {
        path: '/product/:uuid/update',
        name: 'product-update',
        component: ProductRegistryView,
        meta : {
            auth: true,
            update: true
        }
    },
    {
      path: '/squads/:uuid',
      name: 'squads',
      component: SquadsView, 
        meta : {
            auth: true
        }

    },
    {
      path: '/squad/:uuid',
      name: 'squad-by-id',
      component: SquadView,
      props: true, 
        meta : {
            auth: true
        }

    },
    {
      path: '/squad/create/:productUuid',
      name: 'squad-create',
      component: SquadCreateView,
        meta : {
            auth: true,
            type: 'create'
        }
    },
    {
      path: '/squad/:uuid/update',
      name: 'squad-update',
      component: SquadCreateView,
        meta : {
            auth: true,
            type: 'update'
        }
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      component: () => import('../views/OnboardingView.vue'),
        meta : {
            auth: true
        }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/404',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')

    const auth = useAuthStore();

    if (to.meta.auth === true && (token === '' || token === null)) {
        router.push({ name: 'login' })
    } 

    if (auth.auth.name === '') {
        auth.loginByToken()
    }

    return next()
});

export default router
