/**
 * Created by jack on 2017/4/26.
 */

import Vue from 'vue/dist/vue.min'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import xNav from '../../components/nav.vue'
import '/static/css/font-awesome.min.css'

Vue.use(ElementUI)
Vue.use(VueRouter)


const routes = [
    {
        path: '/system',
        component:(render)=>require.async('./system.vue',h=>render(h))
    },
    {
        path: '/banner',
        component:(render)=>require.async('./banner.vue',h=>render(h))
    }, {
        path: '/media',
        component:(render)=>require.async('./media.vue',h=>render(h))
    },
    { path: '/', redirect: '/system' }
]

const router = new VueRouter({
    routes
})

new Vue({
    router,
    data:{
        name:'jack'
    },
    components:{
        xNav
    }
}).$mount("#app")