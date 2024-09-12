import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import History from '../views/History.vue'
import NewTask from '../views/NewTask.vue'
import Success from '../views/Success.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/add',
    name: 'NewTask',
    component: NewTask
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
