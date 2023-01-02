import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignView from '../views/SignView.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: HomeView
  },
  {
    path: '/tables',
    name: 'Tables',
    component: HomeView
  },
  {
    path: '/billing',
    name: 'Billing',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
