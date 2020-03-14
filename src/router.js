import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.serverUrl = 'http://localhost:8000';
axios.defaults.user_id = null;


import Main from './views/Main.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Dashboard from './views/Dashboard.vue'
import Home from './views/Home.vue'
import UserList from './views/UserList.vue'
import Settings from './views/Settings.vue'

import home from './views/biz/Home.vue'

Vue.use(Router)
Vue.use(axios)


export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    { path: '*', redirect: '/auth/login'},
    { 
      path: '/', 
      name: 'Main', 
      component: Main,
      children: [
        { name: 'Login', path: '/auth/login', component: Login },
        { name: 'Register', path: '/auth/register', component: Register },
        { name: 'home', path: '/home', component: home },
      ]
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      redirect: '/dashboard/home',
      component: Dashboard,
      // meta: { auth: true },
      children: [
        { name: 'Home', path: '/dashboard/home', component: Home },
        { name: 'UserList', path: '/dashboard/user-list', component: UserList },
        { name: 'Settings', path: '/dashboard/settings', component: Settings },
      ]
    },

    
  ]
})
