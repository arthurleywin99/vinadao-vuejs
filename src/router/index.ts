import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LandingLayout from '@/layout/LandingLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'how-to-join',
          name: 'how-to-join',
          component: () => import('@/views/HowToJoinView.vue'),
        },
        {
          path: 'contact-us',
          name: 'contact-us',
          component: () => import('@/views/ContactUsView.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

export default router
