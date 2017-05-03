define('pages/admin/media.vue', function(require, exports, module) {

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
  
  var model = function model() {
      return {
          id: '',
          type: '',
          src: '',
          media: '',
          remark: '',
          index: null
      };
  };
  
  exports['default'] = {
      data: function data() {
          return {
              form: {},
              tableData: []
          };
      },
      methods: {},
      components: {},
      mounted: function mounted() {}
  };
  module.exports = exports['default'];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"100%"}},[_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData}},[_c('el-table-column',{attrs:{"type":"index","label":"序号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"type","label":"类型"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"address","label":"地址"}})],1)],1)}
  __vue__options__.staticRenderFns =[]
  

});
