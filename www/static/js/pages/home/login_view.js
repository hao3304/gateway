define('pages/home/login_view.vue', function(require, exports, module) {

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
  var $ = require('node_modules/axios/dist/axios.min');
  
  exports['default'] = {
      data: function data() {
          return {
              form: {
                  username: '',
                  password: ''
              },
              rules: {
                  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
              }
          };
      },
      methods: {
          onSubmit: function onSubmit() {
              var _this = this;
  
              this.$refs.form.validate(function (valid) {
                  if (valid) {
                      $.post('/index/login', _this.form).then(function (_ref) {
                          var data = _ref.data;
  
                          if (data.errno == 0) {
                              window.location.href = '/admin';
                          } else {
                              _this.$message({ message: data.errmsg, type: 'error' });
                          }
                      });
                  }
              });
          }
      },
      components: {}
  };
  module.exports = exports['default'];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"_v-6514aaa8":""}},[_c('div',{staticClass:"login-form"},[_c('h5',[_vm._v("系统管理后台")]),_vm._v(" "),_c('el-form',{ref:"form",attrs:{"label-width":"60px","model":_vm.form,"rules":_vm.rules}},[_c('el-form-item',{attrs:{"label":"用户","prop":"username"}},[_c('el-input',{attrs:{"size":"small","placeholder":"请输入用户名","type":"text"},model:{value:(_vm.form.username),callback:function ($$v) {_vm.form.username=$$v},expression:"form.username"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"密码","prop":"password"}},[_c('el-input',{attrs:{"size":"small","placeholder":"请输入密码","type":"password"},model:{value:(_vm.form.password),callback:function ($$v) {_vm.form.password=$$v},expression:"form.password"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.onSubmit}},[_vm._v("立即登录")]),_vm._v(" "),_c('el-button',[_vm._v("取消")])],1)],1)],1)])}
  __vue__options__.staticRenderFns =[]
  
  ;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})("div[_v-6514aaa8] {\n  box-sizing: border-box;\n  padding-top: 100px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  background-image: url(/static/images/login_bg.jpg);\n  background-size: 100% 100%;\n  min-height: 400px;\n}\ndiv[_v-6514aaa8] h5 {\n  margin: 0;\n  padding-bottom: 20px;\n  font-size: 18px;\n}\ndiv[_v-6514aaa8] .login-form {\n  width: 300px;\n  margin: 0 auto;\n  padding: 20px 30px 10px 30px;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\n  border-radius: 4px;\n  background-color: rgba(255, 255, 255, 0.6);\n}\n");
  

});
