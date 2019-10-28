import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/layout/Home.vue'
// 智能分析
import analysis from './components/analysis/index.vue'
// 設備管理
import machine from './components/machine/index.vue'
// 故障管理
import malfunction from './components/break/index.vue'
// 生產管理
// import manufacture from './components/manufacture/index.vue'
// 生產管理下 報價系統/機台分析
import Cadata from './components/manufacture/報價管理系統/index.vue'
import toolana from './components/manufacture/機台分析/index.vue'

// 刀具管理
import tool from './components/tool/index.vue'
// 系統狀態
import System from './components/SystemIndex/index.vue'
//水位分析
import waterlevel from './components/waterlevel/index.vue'
//參數設定
import parameter from './components/parameter/index.vue'
Vue.use(Router)

export default new Router({
    routes: [{
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
                    path: '/machine',
                    name: 'machine',
                    component: machine
                },
                {
                    path: '/analysis',
                    name: 'analysis',
                    component: analysis
                },
                {
                    path: '/manufacture',
                    name: 'Cadata',
                    component: Cadata,
                    // children: [{
                    //     path: '/manufacture/Cadata',
                    //     name: 'Cadata',
                    //     component: Cadata,
                    // }]
                },
                {
                    path: '/toolana',
                    name: 'toolana',
                    component: toolana,
                },
                {
                    path: '/malfunction',
                    name: 'malfunction',
                    component: malfunction
                },
                {
                    path: '/tool',
                    name: 'tool',
                    component: tool
                },
                {
                    path: '/waterlevel',
                    name: 'waterlevel',
                    component: waterlevel
                },
                {
                    path: '/parameter',
                    name: 'parameter',
                    component: parameter
                }
            ]

        }

    ]
})
