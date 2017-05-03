define('pages/admin/banner.vue', function(require, exports, module) {

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
  
  var model = function model() {
      return {
          id: '',
          src: '',
          remark: ''
      };
  };
  
  exports['default'] = {
      data: function data() {
          return {
              form: model(),
              list: [],
              dialog: false
          };
      },
      methods: {
          getList: function getList() {
              var _this = this;
  
              _axiosDistAxiosMinJs2['default'].get('/admin/banner').then(function (_ref) {
                  var data = _ref.data.data;
  
                  _this.list = data;
              });
          },
          onSubmit: function onSubmit() {
              var _this2 = this;
  
              this.dialog = false;
              _axiosDistAxiosMinJs2['default'].post('/admin/banner', this.form).then(function (_ref2) {
                  var data = _ref2.data;
  
                  if (data.errno == 0) {
                      _this2.$message({ message: '提交成功', type: 'success' });
                      _this2.getList();
                  }
              });
          },
          onAddClick: function onAddClick() {
              this.dialog = true;
              this.form = _extends({}, model());
          },
          onUpload: function onUpload(rep) {
              this.form.src = rep.data.name;
          },
          onDel: function onDel(id) {
              var _this3 = this;
  
              this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
              }).then(function () {
  
                  _axiosDistAxiosMinJs2['default']['delete']('/admin/banner/' + id).then(function (_ref3) {
                      var data = _ref3.data;
  
                      _this3.$message({
                          type: 'success',
                          message: '删除成功!'
                      });
                      _this3.getList();
                  });
              })['catch'](function () {});
          }
      },
      mounted: function mounted() {
          this.getList();
      }
  };
  module.exports = exports['default'];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"_v-960310dc":""}},[_vm._l((_vm.list),function(l){return _c('div',{staticClass:"el-upload el-upload--picture-card banner-list"},[_c('img',{staticClass:"avatar",attrs:{"src":'/static/upload/'+l.src}}),_vm._v(" "),_c('div',{staticClass:"hover-tool"},[_c('a',{attrs:{"href":"javascript:;"}},[_vm._v("编辑")]),_vm._v(" "),_c('a',{attrs:{"target":"_blank","href":'/static/upload/'+l.src}},[_vm._v("查看")]),_vm._v(" "),_c('a',{attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.onDel(l.id)}}},[_vm._v("删除")])])])}),_vm._v(" "),_c('div',{staticClass:"el-upload el-upload--picture-card",on:{"click":_vm.onAddClick}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('el-form',{attrs:{"model":_vm.form,"label-width":"60px"}},[_c('el-form-item',{attrs:{"label":"图片"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"action":"/admin/index/upload","show-file-list":false,"on-success":_vm.onUpload}},[(_vm.form.src)?_c('img',{staticClass:"avatar",attrs:{"src":'/static/upload/'+_vm.form.src}}):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序"}},[_c('el-input',{attrs:{"type":"number"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注"}},[_c('el-input',{attrs:{"type":"text"}})],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialog = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.onSubmit}},[_vm._v("确 定")])],1)],1)],2)}
  __vue__options__.staticRenderFns =[]
  
  ;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})("div[_v-960310dc] .banner-list {\n  padding: 2px;\n  position: relative;\n}\ndiv[_v-960310dc] .banner-list:hover .hover-tool {\n  display: block;\n  background-color: rgba(0, 0, 0, 0.5);\n}\ndiv[_v-960310dc] .banner-list:hover .hover-tool a {\n  display: inline;\n}\ndiv[_v-960310dc] .banner-list img {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n}\ndiv[_v-960310dc] .banner-list .hover-tool {\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0);\n  transition: all .4s;\n}\ndiv[_v-960310dc] .banner-list .hover-tool a {\n  text-decoration: none;\n  display: none;\n  color: #fff;\n  font-size: 14px;\n}\ndiv[_v-960310dc] .banner-list .hover-tool a:hover {\n  color: #0099cc;\n}\n");
  

});
