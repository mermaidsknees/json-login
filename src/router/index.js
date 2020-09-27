import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    meta: {layout: 'empty'},
    component: Login
  },
  {
    path:'/home',
    name:'Home',
    meta:{layout:'admin'},
    component: () => import('../components/Home.vue') 
  },
  {
    path:'*',
    name:'NotFound',
    component:() => import('../components/NotFound.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
