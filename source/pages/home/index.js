import 'bootstrap3/dist/css/bootstrap.css'
require('vue2-animate/dist/vue2-animate.min.css')
import 'bootstrap3/dist/js/bootstrap.js'
import 'jquery-scrollto'
import Vue from 'vue/dist/vue.min.js'

new Vue({
    el:'#app',
    data:{
        hash:'',
        top:false,
        pic:'normal'
    },
    methods: {
        toScroll(target) {
           $(target).ScrollTo();
           this.hash = target;
        },
        onScroll() {
           this.top =  document.body.scrollTop > 10;
        },
        onHover(pic) {
            this.pic = pic || 'normal'
        }
    },
    mounted() {
        this.hash = location.hash || '#index';
        window.onscroll = this.onScroll;
        $(".loader").animate({opacity:0},600,function () {
            $(".loader").remove();
        })
    },
    components:{
    }
})

new WOW().init();