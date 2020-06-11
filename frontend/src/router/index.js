import Vue from 'vue'
import VueRouter from 'vue-router'
import FormComponent from '../components/registration/FormComponent.vue'
import SignInComponent from "../components/registration/SignInComponent";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'FormComponent',
    component: FormComponent
  },
  {
    path: '/sign',
    name: 'SignInComponent',
    component: SignInComponent
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
