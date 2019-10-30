import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import System from '../components/SystemHome/index.vue'
import sysanalyze from '../components/sysanalyze/index.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        redirect: '/System',
        component: Home,
        children: [{
                path: '/System',
                name: 'System',
                component: System
            },
            {
                path: '/sysanalyze',
                name: 'sysanalyze',
                component: sysanalyze
            }
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router