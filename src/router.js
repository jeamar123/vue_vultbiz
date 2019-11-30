import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL;
// axios.defaults.serverUrl = 'http://mednefits.local';


import Main from './views/Main.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Dashboard from './views/Dashboard.vue'
import Home from './views/Home.vue'

Vue.use(Router)
Vue.use(axios)


export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    { path: '*', redirect: '/auth/login'},
    { path: '/', name: 'Main', component: Main },
    { path: '/auth/login', name: 'Login', component: Login },
    { path: '/auth/register', name: 'Register', component: Register },
    {
      path: '/dashboard',
      name: 'Dashboard',
      redirect: '/dashboard/home',
      component: Dashboard,
      // meta: { auth: true },
      children: [
        { name: 'Home', path: '/dashboard/home', component: Home },
      ]
    },
    
  ]
})
