import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const ifNotAuth = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next()
        return
    } 
    next('/dashboard')
}

const ifAuth = (to, from, next) => {
    if (store.getters.isAuthenticated) {
      next()
      return
    }
    next('/login')
}

const routes = [
    {
        name: 'Login',
        path: '/login',
        component: () => import('../components/auth/Login.vue'),
        beforeEnter: ifNotAuth
    },
    {
        name: "Register",
        path: "/register",
        component: () => import('../components/auth/Register.vue'),
        beforeEnter: ifNotAuth
    },
    {
        name: "ForgotPassword",
        path: "/forgot_password",
        component: () => import('../components/auth/ForgotPassword.vue'),
        beforeEnter: ifNotAuth
    },
    {
        name: "ResetPassword",
        path: "/reset_password/:token",
        props: true,
        component: () => import('../components/auth/ResetPassword.vue'),
        beforeEnter: ifNotAuth
    },
    {
        name: "NotFound",
        path: "/404",
        component: () => import('../components/errors/NotFound.vue'),
    },
    {
        path: "/app",
        component: () => import('../components/app/App.vue'),
        beforeEnter: ifAuth,
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import('../components/app/dashboard/Dashboard.vue'),
                beforeEnter: ifAuth,
            },
            {
                path: '/profile',
                name: 'Profile',
                component: () => import('../components/app/users/Profile.vue'),
                beforeEnter: ifAuth,
            },
            {
                path: '/change_password',
                name: 'ChangePassword',
                component: () => import('../components/app/users/ChangePassword.vue'),
                beforeEnter: ifAuth,
            }
        ]
    }
]

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})