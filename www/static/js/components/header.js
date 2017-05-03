define('components/header.vue', function(require, exports, module) {

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
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports["default"] = {
      data: function data() {
          return {};
      },
      components: {}
  };
  module.exports = exports["default"];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{attrs:{"_v-ffdb523a":""}},[_c('label',{staticClass:"title"},[_vm._v("\n        CRM后台管理\n    ")]),_vm._v(" "),_c('span',{staticStyle:{"float":"right"}},[_c('el-button',{attrs:{"type":"text"}},[_vm._v("退出")])],1)])}
  __vue__options__.staticRenderFns =[]
  
  ;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})("header[_v-ffdb523a] {\n  height: 50px;\n  line-height: 50px;\n  padding: 0 20px;\n  color: #fff;\n  font-size: 22px;\n  background-color: #0099cc;\n}\nheader[_v-ffdb523a] .el-button {\n  color: #fff;\n}\n");
  

});
