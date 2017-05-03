/**
 * Created by jack on 2017/4/26.
 */

import Vue from 'vue/dist/vue.min'
import login from './login_view.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

new Vue({
    data:{
        name:'jack'
    },
    render:(h)=>h(login)
}).$mount("#app")