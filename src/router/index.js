import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import firebase from 'firebase/app'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    meta: {layout: 'empty', auth:false},
    component: Login
  },
  {
    path:'/home',
    name:'Home',
    meta:{layout:'admin', auth: true},
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

router.beforeEach(async(to,from,next) =>{

  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record=>record.meta.auth)

 if(requireAuth && !currentUser){
   next()
 } else {
   next()
 }


  

})

export default router
