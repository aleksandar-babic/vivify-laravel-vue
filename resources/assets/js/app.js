/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './views/App'
import Home from './views/Home'
import Login from './views/Login'

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/spa/',
            name: 'home',
            component: Home
        },
        {
            path: '/spa/login',
            name: 'login',
            component: Login
        }
    ]
});
Vue.router = router;

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = 'http://localhost:8000/api';
Vue.use(require('../../../node_modules/vue-auth/node_modules/@websanova/vue-auth'), {
    auth: require('../../../node_modules/vue-auth/node_modules/@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('../../../node_modules/vue-auth/node_modules/@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('../../../node_modules/vue-auth/node_modules/@websanova/vue-auth/drivers/router/vue-router.2.x.js')
});

const app = new Vue({
    el: '#app',
    components: {App},
    router
});
