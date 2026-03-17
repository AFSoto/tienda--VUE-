import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }  // al navegar siempre sube al top
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'shop',
          name: 'shop',
          component: () => import('@/views/ShopView.vue')
        },
        {
          path: 'shop/:id',
          name: 'shop-detail',
          component: () => import('@/views/ShopDetailView.vue')
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('@/views/CartView.vue')
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: () => import('@/views/CheckoutView.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/views/ContactView.vue')
        }
      ]
    },
    {
      // Ruta 404
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

export default router
