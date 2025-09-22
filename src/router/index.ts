import { createRouter, createWebHistory } from 'vue-router'
import UserLoginPage from '../../pages/user/UserLoginPage.vue'
import UserRegisterPage from '../../pages/user/UserRegisterPage.vue'
import UserManagePage from '../../pages/admin/UserManagePage.vue'
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
      path: '/user/login',
      name: '用户登录',
      component: UserLoginPage,
    },
    {
      path: '/user/register',
      name: '用户注册',
      component: UserRegisterPage,
    },
    {
      path: '/admin/userManage',
      name: '用户管理',
      component: UserManagePage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../../pages/AboutView.vue'),
    },
  ],
})

export default router
