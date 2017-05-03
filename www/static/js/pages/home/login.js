define('pages/home/login', function(require, exports, module) {

  /**
   * Created by jack on 2017/4/26.
   */
  
  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _vueDistVueMin = require('node_modules/vue/dist/vue.min');
  
  var _vueDistVueMin2 = _interopRequireDefault(_vueDistVueMin);
  
  var _login_viewVue = require('pages/home/login_view.vue');
  
  var _login_viewVue2 = _interopRequireDefault(_login_viewVue);
  
  var _elementUi = require('node_modules/element-ui/lib/element-ui.common');
  
  var _elementUi2 = _interopRequireDefault(_elementUi);
  
  '';
  
  _vueDistVueMin2['default'].use(_elementUi2['default']);
  
  new _vueDistVueMin2['default']({
      data: {
          name: 'jack'
      },
      render: function render(h) {
          return h(_login_viewVue2['default']);
      }
  }).$mount("#app");

});
