import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail'
import List from '../views/List'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/list/:id',
    name: 'List',
    component: List
  },
]

const router = new VueRouter({
  routes
})

export default router
