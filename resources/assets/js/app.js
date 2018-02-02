/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

import VueRouter from 'vue-router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAuth from '../../../node_modules/vue-auth/node_modules/@websanova/vue-auth';
import VueAuthBearer from '../../../node_modules/vue-auth/node_modules/@websanova/vue-auth/drivers/auth/bearer.js';
import VueAuthAxios from '../../../node_modules/vue-auth/node_modules/@websanova/vue-auth/drivers/http/axios.1.x.js';
import VueAuthRouter from '../../../node_modules/vue-auth/node_modules/@websanova/vue-auth/drivers/router/vue-router.2.x.js';
import App from './views/App';
import store from './store';
import router from './router';

window.Vue = require('vue');
window.BASE_URL = 'http://localhost:8000/api';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.router = router;
Vue.axios.defaults.baseURL = window.BASE_URL;
Vue.use(VueAuth,
    {
        auth: VueAuthBearer,
        http: VueAuthAxios,
        router: VueAuthRouter,
        authRedirect: '/spa/login'
    }
);

const app = new Vue({
    el: '#app',
    components: {App},
    router,
    store
});
