import Vue from 'vue';
import vClickOutside from 'v-click-outside';
import VueSweetalert2 from 'vue-sweetalert2';
import VueMoment from 'vue-moment';
import JsonExcel from 'vue-json-excel'
import VCalendar from 'v-calendar';

 
import $ from 'jquery'; 

import 'v-calendar/lib/v-calendar.min.css';

import App from './App.vue';
import router from './router';

Vue.use(vClickOutside);
Vue.use(VueSweetalert2);
Vue.use(VueMoment);
Vue.component('downloadExcel', JsonExcel)
Vue.use(VCalendar);
Vue.config.productionTip = false;

// const $ = require('jquery');
window.$ = $; 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
