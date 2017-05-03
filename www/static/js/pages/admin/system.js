define('pages/admin/system.vue', function(require, exports, module) {

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
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _axiosDistAxiosMinJs = require('node_modules/axios/dist/axios.min');
  
  var _axiosDistAxiosMinJs2 = _interopRequireDefault(_axiosDistAxiosMinJs);
  
  exports['default'] = {
      data: function data() {
          return {
              form: {
                  name: '',
                  tel: '',
                  qq: '',
                  logo: '',
                  email: '',
                  address: '',
                  url: '',
                  cover: ''
              }
          };
      },
      methods: {
          getInfo: function getInfo() {
              var _this = this;
  
              _axiosDistAxiosMinJs2['default'].get('/admin/system').then(function (_ref) {
                  var data = _ref.data.data;
  
                  if (data.id == 0) {
                      _this.form = _extends({}, data);
                  }
              });
          },
          onSubmit: function onSubmit() {
              var _this2 = this;
  
              _axiosDistAxiosMinJs2['default'].put('/admin/system', this.form).then(function (_ref2) {
                  var data = _ref2.data;
  
                  if (data.errno == 0) {
                      _this2.$message({ message: '更新成功', type: 'success' });
                  }
              });
          },
          onUpload: function onUpload(rep) {
              this.form.url = rep.data.name;
          },
          onUploadCover: function onUploadCover(rep) {
              this.form.cover = rep.data.name;
          }
      },
      components: {},
      mounted: function mounted() {
          this.getInfo();
      }
  };
  module.exports = exports['default'];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"_v-71aa8aac":""}},[_c('el-form',{attrs:{"label-width":"80px","model":_vm.form}},[_c('el-form-item',{attrs:{"label":"公司Logo"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"action":"/admin/index/upload","show-file-list":false,"on-success":_vm.onUpload}},[(_vm.form.url)?_c('img',{staticClass:"avatar",attrs:{"src":'/static/upload/'+_vm.form.url}}):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"公司名称"}},[_c('el-input',{model:{value:(_vm.form.name),callback:function ($$v) {_vm.form.name=$$v},expression:"form.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"联系电话"}},[_c('el-input',{model:{value:(_vm.form.tel),callback:function ($$v) {_vm.form.tel=$$v},expression:"form.tel"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"QQ号码"}},[_c('el-input',{model:{value:(_vm.form.qq),callback:function ($$v) {_vm.form.qq=$$v},expression:"form.qq"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"邮箱地址"}},[_c('el-input',{model:{value:(_vm.form.email),callback:function ($$v) {_vm.form.email=$$v},expression:"form.email"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"公司地址"}},[_c('el-input',{model:{value:(_vm.form.address),callback:function ($$v) {_vm.form.address=$$v},expression:"form.address"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"背景图片"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"action":"/admin/index/upload","show-file-list":false,"on-success":_vm.onUploadCover}},[(_vm.form.cover)?_c('img',{staticClass:"avatar",attrs:{"src":'/static/upload/'+_vm.form.cover}}):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.onSubmit}},[_vm._v("提交修改")])],1)],1)],1)}
  __vue__options__.staticRenderFns =[]
  
  ;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  div[_v-71aa8aac]{\n      width:500px;\n  }\n\n    .avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #20a0ff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 178px;\n  height: 178px;\n  line-height: 178px;\n  text-align: center;\n}\n.avatar {\n  width: 178px;\n  height: 178px;\n  display: block;\n}\n");
  

});
