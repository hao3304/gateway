define('components/nav.vue', function(require, exports, module) {

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _axiosDistAxiosMinJs = require('node_modules/axios/dist/axios.min');
  
  var _axiosDistAxiosMinJs2 = _interopRequireDefault(_axiosDistAxiosMinJs);
  
  exports['default'] = {
      data: function data() {
          return {
              nav: [{
                  name: '系统信息',
                  url: 'system',
                  icon: 'home'
              }, {
                  name: '滚动广告',
                  url: 'banner',
                  icon: 'file-picture-o'
              }, {
                  name: '图文视频',
                  url: 'media',
                  icon: 'list'
              }],
              selected: {},
              active: 'system'
          };
      },
      methods: {
          onSelect: function onSelect(index) {
  
              this.selected = this.nav.filter(function (n) {
                  return index == n.url;
              })[0];
              this.$router.push('/' + index);
          },
          onLoginOut: function onLoginOut() {
              _axiosDistAxiosMinJs2['default'].post('/admin/index/logout').then(function (rep) {
                  window.location.href = '/index/login';
              });
          }
      },
      mounted: function mounted() {
          this.active = location.hash.replace('#/', '') || 'system';
      }
  };
  module.exports = exports['default'];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('nav',{attrs:{"_v-df6aec7a":""}},[_c('el-menu',{staticClass:"el-menu-vertical-demo",attrs:{"default-active":_vm.active,"mode":"horizontal","theme":"dark"},on:{"select":_vm.onSelect}},[_c('label',{staticStyle:{"float":"left"}},[_vm._v("后台管理")]),_vm._v(" "),_vm._l((_vm.nav),function(n){return _c('el-menu-item',{attrs:{"index":n.url}},[_c('i',{staticClass:"fa",class:'fa-'+n.icon,staticStyle:{"margin-right":"10px"}}),_vm._v(_vm._s(n.name))])})],2),_vm._v(" "),_c('span',{staticClass:"user-info"},[_vm._v("\n                Admin  "),_c('a',{attrs:{"href":"javascript:;"},on:{"click":_vm.onLoginOut}},[_vm._v("退出")])])],1),_vm._v(" "),_c('div',{staticClass:"breadcrumb"},[_c('el-breadcrumb',{attrs:{"separator":"/"}},[_c('el-breadcrumb-item',{attrs:{"to":{ path: '/' }}},[_vm._v("首页")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v(_vm._s(_vm.selected.name || '系统信息'))])],1)],1)])}
  __vue__options__.staticRenderFns =[]
  
  ;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})("nav[_v-df6aec7a] label {\n  float: left;\n  margin-top: 15px;\n  font-size: 20px;\n  padding: 0 20px;\n  font-weight: 200;\n  color: #fff;\n}\nnav[_v-df6aec7a] .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,\nnav[_v-df6aec7a] .el-menu-item.is-active {\n  border-bottom: 5px solid #20a0ff;\n}\nnav[_v-df6aec7a] .user-info {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-size: 14px;\n  color: #fff;\n}\nnav[_v-df6aec7a] .user-info a {\n  color: #fff;\n}\n.breadcrumb {\n  box-sizing: border-box;\n  padding-top: 15px;\n  padding-left: 15px;\n  width: 100%;\n  height: 43px;\n  background: #eff2f7;\n}\n");
  

});
