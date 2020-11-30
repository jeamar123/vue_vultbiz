import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.serverUrl = 'http://localhost:8001';

// DASHBOARD ROUTES

import Login from './views/Login.vue'
import Register from './views/Register.vue'
import { Container } from './views/Dashboard/Container'
import { DashHome } from './views/Dashboard/DashHome'
import { UserList } from './views/Dashboard/UserList'
import { PeakHours } from './views/Dashboard/PeakHours'

import { Settings } from './views/Dashboard/Settings'
import { BusinessInformation } from './views/Dashboard/BusinessInformation'
import { BusinessHours } from './views/Dashboard/BusinessHours'
import { Location } from './views/Dashboard/Location'

// LANDING PAGE ROUTES
import { Main } from './views/Landing/Main'
import { Home } from './views/Landing/Home'

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
      redirect: '/home',
      component: Main,
      children: [
        { name: 'Login', path: '/auth/login', component: Login },
        { name: 'Register', path: '/auth/register', component: Register },
        { name: 'Home', path: '/home', component: Home },
      ]
    },
    {
      path: '/dashboard',
      name: 'DashboardContainer',
      redirect: '/dashboard/home',
      component: Container,
      // meta: { auth: true },
      children: [
        { name: 'DashHome', path: '/dashboard/home', component: DashHome },
        // { name: 'UserList', path: '/dashboard/user-list', component: UserList },
        { name: 'PeakHours', path: '/dashboard/peak-hours', component: PeakHours },
        { 
          name: 'Settings', 
          path: '/dashboard/settings', 
          component: Settings ,
          redirect: '/dashboard/settings/information',
          children: [
            { name: 'BusinessInformation', path: '/dashboard/settings/information', components: { 'settings-child' : BusinessInformation } },
            { name: 'BusinessHours', path: '/dashboard/settings/business-hours', components: { 'settings-child' : BusinessHours } },
            { name: 'Location', path: '/dashboard/settings/location', components: { 'settings-child' : Location } },
          ]
        },
      ]
    },

    
  ]
})
