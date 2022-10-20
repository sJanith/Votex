import Vue , { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
 
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
 
 
createApp(App).use(router).use(VCalendar).mount('#app') 