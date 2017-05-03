define('pages/home/index', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  '';
  
  '';
  
  require('node_modules/bootstrap3/dist/js/bootstrap');
  
  require('node_modules/jquery-scrollto/out/lib/jquery-scrollto');
  
  var _vueDistVueMinJs = require('node_modules/vue/dist/vue.min');
  
  var _vueDistVueMinJs2 = _interopRequireDefault(_vueDistVueMinJs);
  
  '';
  
  var _elementUi = require('node_modules/element-ui/lib/element-ui.common');
  
  _vueDistVueMinJs2['default'].use(_elementUi.Carousel);
  _vueDistVueMinJs2['default'].use(_elementUi.CarouselItem);
  
  new _vueDistVueMinJs2['default']({
      el: '#app',
      data: {
          hash: '',
          top: false
      },
      methods: {
          toScroll: function toScroll(target) {
              $(target).ScrollTo();
              this.hash = target;
          },
          onScroll: function onScroll(e) {
              this.top = document.body.scrollTop > 10;
          }
      },
      mounted: function mounted() {
          this.hash = location.hash || '#index';
          window.onscroll = this.onScroll;
      },
      components: {}
  });
  
  new WOW().init();

});
