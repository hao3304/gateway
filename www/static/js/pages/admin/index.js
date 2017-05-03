define('pages/admin/index', function(require, exports, module) {

  /**
   * Created by jack on 2017/4/26.
   */
  
  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _vueDistVueMin = require('node_modules/vue/dist/vue.min');
  
  var _vueDistVueMin2 = _interopRequireDefault(_vueDistVueMin);
  
  var _vueRouter = require('node_modules/vue-router/dist/vue-router.common');
  
  var _vueRouter2 = _interopRequireDefault(_vueRouter);
  
  var _elementUi = require('node_modules/element-ui/lib/element-ui.common');
  
  var _elementUi2 = _interopRequireDefault(_elementUi);
  
  '';
  
  var _componentsNavVue = require('components/nav.vue');
  
  var _componentsNavVue2 = _interopRequireDefault(_componentsNavVue);
  
  '';
  
  _vueDistVueMin2['default'].use(_elementUi2['default']);
  _vueDistVueMin2['default'].use(_vueRouter2['default']);
  
  var routes = [{
      path: '/system',
      component: function component(render) {
          return require.async(['pages/admin/system.vue'], function (h) {
              return render(h);
          });
      }
  }, {
      path: '/banner',
      component: function component(render) {
          return require.async(['pages/admin/banner.vue'], function (h) {
              return render(h);
          });
      }
  }, {
      path: '/media',
      component: function component(render) {
          return require.async(['pages/admin/media.vue'], function (h) {
              return render(h);
          });
      }
  }, { path: '/', redirect: '/system' }];
  
  var router = new _vueRouter2['default']({
      routes: routes
  });
  
  new _vueDistVueMin2['default']({
      router: router,
      data: {
          name: 'jack'
      },
      components: {
          xNav: _componentsNavVue2['default']
      }
  }).$mount("#app");

});
