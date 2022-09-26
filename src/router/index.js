import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'addNew',
    component: () => import('../views/AddNew.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/List.vue') // lazy loading
  },
  {
    path: '/task/:id',
    name: 'task',
    component: () => import('../views/Task.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
