import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../../pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // 懒加载-请求页面的时候才加载
      component: () => import('../../pages/AboutView.vue'),
    },
  ],
})

export default router
