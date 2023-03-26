import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "home-login" */ '@/views/home-login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "home-register" */ '@/views/home-register.vue')
   },
  {
    path: '/',
    name: 'HomeTabbar',
    component: () => import(/* webpackChunkName: "home-tabbar" */ '@/views/home-tabbar.vue'),
    children: [
      {
        path: 'movie',
        name: 'MoviePage',
        component: () => import(/* webpackChunkName: "movie-page" */ '@/views/movie/movie-page.vue')
      },
      {
        path: 'cinema',
        name: 'CinemaPage',
        component: () => import(/* webpackChunkName: "cinema-page" */'@/views/cinema/cinema-page.vue')
      },
      {
        path: 'preference',
        name: 'PreferencePage',
        component: () => import(/* webpackChunkName: "preference-page" */ '@/views/preference/preference-page.vue')
      },
      {
        path: '/mine',
        name: 'MinePage',
        component: () => import(/* webpackChunkName: "mine-page" */ '@/views/mine/mine-page.vue')
      },
      {
        path: '*',
        redirect: '/movie'
      }
    ]
  },
 
 
]

const router = new VueRouter({
  routes
})

export default router
