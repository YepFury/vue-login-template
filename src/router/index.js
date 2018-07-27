import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from "../utils/auth";

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../pages/Home'),
            meta: {
                auth: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../pages/Login')
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        next();
    }
    else {
        if (to.meta.auth && !getToken()) {
            next({
                name: 'Login',
                path: '/login'
            });
        }
        else {
            next();
        }
    }
})

export default router
