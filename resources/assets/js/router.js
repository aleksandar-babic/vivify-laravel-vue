import VueRouter from "vue-router";
import Home from './views/Home'
import Login from './views/Login'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/spa/',
            name: 'home',
            meta: {
                auth: true
            },
            component: Home
        },
        {
            path: '/spa/login',
            name: 'login',
            component: Login
        }
    ]
});