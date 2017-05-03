import 'bootstrap3/dist/css/bootstrap.css'
import 'animate.css'
import 'bootstrap3/dist/js/bootstrap.js'
import 'jquery-scrollto'
import Vue from 'vue/dist/vue.min.js'
import 'element-ui/lib/theme-default/index.css'
import {Carousel,CarouselItem} from 'element-ui'

Vue.use(Carousel)
Vue.use(CarouselItem)

new Vue({
    el:'#app',
    data:{
        hash:'',
        top:false
    },
    methods: {
        toScroll(target) {
           $(target).ScrollTo();
           this.hash = target;
        },
        onScroll(e) {
           this.top =  document.body.scrollTop > 10;
        }
    },
    mounted() {
        this.hash = location.hash || '#index';
        window.onscroll = this.onScroll;
    },
    components:{
    }
})

new WOW().init();