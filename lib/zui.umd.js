(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["zui"] = factory();
	else
		root["zui"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "912e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b53b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bc2a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f675ff8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b53b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f675ff8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5f675ff8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c15b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_multi_image_preview_vue_vue_type_style_index_0_id_7bf62f62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("912e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_multi_image_preview_vue_vue_type_style_index_0_id_7bf62f62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_multi_image_preview_vue_vue_type_style_index_0_id_7bf62f62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"49142bbf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Button/src/index.vue?vue&type=template&id=5f675ff8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"z-button"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/Button/src/index.vue?vue&type=template&id=5f675ff8&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Button/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'z-button',
  props: {
    type: String
  }
});

// CONCATENATED MODULE: ./packages/Button/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Button_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Button/src/index.vue?vue&type=style&index=0&id=5f675ff8&scoped=true&lang=css&
var srcvue_type_style_index_0_id_5f675ff8_scoped_true_lang_css_ = __webpack_require__("bc2a");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/Button/src/index.vue






/* normalize component */

var component = normalizeComponent(
  Button_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5f675ff8",
  null
  
)

/* harmony default export */ var Button_src = (component.exports);
// CONCATENATED MODULE: ./packages/Button/index.js
// 导入组件，组件必须声明 name

// 为组件提供 install 安装方法，供按需引入
Button_src.install = function (Vue) {
    Vue.component(Button_src.name, Button_src)
}
// 导出组件
/* harmony default export */ var Button = (Button_src);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"49142bbf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Image-Preview/src/index.vue?vue&type=template&id=40338582&scoped=true&
var srcvue_type_template_id_40338582_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"flex","width":"100%","height":"100%"}},[_vm._l((_vm.imgList),function(img,index){return _c('div',{key:index,staticStyle:{"margin-left":"5px"},style:({width: _vm.width, height: _vm.height})},[_c('img',{staticStyle:{"cursor":"zoom-in","width":"100%","height":"100%"},style:({objectFit: _vm.fit }),attrs:{"src":img,"alt":""},on:{"click":function($event){return _vm.showPhotoPreview(index)}}})])}),_c('multi-image-preview',{ref:"multiImagePreview",attrs:{"show":_vm.multiImageVisible,"img-list":_vm.imgList,"now-img-index":_vm.imgIndex}})],2)}
var srcvue_type_template_id_40338582_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/Image-Preview/src/index.vue?vue&type=template&id=40338582&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"49142bbf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Image-Preview/src/multi-image-preview.vue?vue&type=template&id=7bf62f62&scoped=true&
var multi_image_previewvue_type_template_id_7bf62f62_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.show)?_c('div',{ref:"heImg",staticClass:"hevue-imgpreview-wrap",attrs:{"id":"hevue-imgpreview-wrap"},on:{"mouseup":function($event){return _vm.removeMove('pc')},"touchend":function($event){return _vm.removeMove('mobile')},"click":function($event){$event.stopPropagation();return _vm.clickMask.apply(null, arguments)}}},[_c('div',{staticClass:"he-img-wrap"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.imgState === 1),expression:"imgState === 1"}],staticClass:"iconfont hevue-img-status-icon rotate-animation"},[_vm._v("  ")]),_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.imgState === 2),expression:"imgState === 2"}],ref:"heImView",staticClass:"he-img-view",style:('transform: scale(' +
            _vm.imgScale +
            ') rotate(' +
            _vm.imgRotate +
            'deg);margin-top:' +
            _vm.imgTop +
            'px;margin-left:' +
            _vm.imgLeft +
            'px;' +
            _vm.maxWH),attrs:{"src":_vm.imgurl},on:{"click":function($event){$event.stopPropagation();},"mousedown":_vm.addMove,"touchstart":_vm.addMoveMobile}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.imgState === 3),expression:"imgState === 3"}],staticClass:"iconfont hevue-img-status-icon"},[_vm._v("  ")]),(_vm.closeBtn)?_c('div',{staticClass:"iconfont he-close-icon",on:{"click":function($event){$event.stopPropagation();return _vm.close.apply(null, arguments)}}},[_vm._v("  ")]):_vm._e(),(_vm.arrowBtn && _vm.multiple)?_c('div',{staticClass:"arrow arrow-left iconfont",on:{"click":function($event){$event.stopPropagation();return _vm.toogleImg(false)}}},[_vm._v("  ")]):_vm._e(),(_vm.arrowBtn && _vm.multiple)?_c('div',{staticClass:"arrow arrow-right iconfont",on:{"click":function($event){$event.stopPropagation();return _vm.toogleImg(true)}}},[_vm._v("  ")]):_vm._e(),(_vm.controlBar)?_c('div',{staticClass:"he-control-bar-wrap"},[_c('div',{staticClass:"he-control-bar",on:{"click":function($event){$event.stopPropagation();}}},[_c('div',{staticClass:"he-control-btn iconfont",on:{"click":function($event){$event.stopPropagation();return _vm.scaleFunc(-0.15)}}},[_vm._v("  ")]),_c('div',{staticClass:"he-control-btn iconfont",on:{"click":function($event){$event.stopPropagation();return _vm.scaleFunc(0.15)}}},[_vm._v("  ")]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isFull),expression:"isFull"}],staticClass:"he-control-btn iconfont",on:{"click":function($event){$event.stopPropagation();return _vm.imgToggle.apply(null, arguments)}}},[_vm._v("  ")]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isFull),expression:"!isFull"}],staticClass:"he-control-btn iconfont",on:{"click":function($event){$event.stopPropagation();return _vm.imgToggle.apply(null, arguments)}}},[_vm._v("  ")]),_c('div',{staticClass:"he-control-btn iconfont",on:{"click":function($event){$event.stopPropagation();return _vm.rotateFunc(-90)}}},[_vm._v("  ")]),_c('div',{staticClass:"he-control-btn iconfont",on:{"click":function($event){$event.stopPropagation();return _vm.rotateFunc(90)}}},[_vm._v("  ")])])]):_vm._e(),(_vm.controlBar && _vm.multiple)?_c('div',{staticClass:"he-control-num"},[_vm._v(" "+_vm._s(_vm.imgIndex + 1)+" / "+_vm._s(_vm.imgList.length)+" ")]):_vm._e()])]):_vm._e()])}
var multi_image_previewvue_type_template_id_7bf62f62_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/Image-Preview/src/multi-image-preview.vue?vue&type=template&id=7bf62f62&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Image-Preview/src/multi-image-preview.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// https://github.com/heyongsheng/hevue-img-preview
/* harmony default export */ var multi_image_previewvue_type_script_lang_js_ = ({
  // name: 'multi-image-preview',
  props: {
    imgList: {
      type: Array,
      default () {
        return []
      }
    },
    nowImgIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      // imgWidth: 0,
      // imgHeight: 0,
      imgScale: 1,
      imgTop: 0,
      imgLeft: 0,
      imgRotate: 0,
      isFull: false,
      maxWH: 'max-width:100%;max-height:100%;',
      clientX: 0,
      clientY: 0,
      imgIndex: 0,
      canRun: true,
      imgurl: '',
      imgState: 1,
      start: [{}, {}],
      mobileScale: 0, // 手指离开时图片的缩放比例
      // 以下内容为用户传入配置
      show: false, // 插件显示，默认为false
      url: '', // 预览图片的地址
      // nowImgIndex: 0,
      multiple: true,
      // imgList: [],
      // 以下为可全局配置
      controlBar: true,
      closeBtn: true,
      arrowBtn: true,
      // 开启键盘事件
      keyboard: true,
      clickMaskCLose: false // 是否点击遮罩关闭，默认false
    }
  },
  mounted () {
    this.initImg()
  },
  watch: {
    url () {
      this.initImg()
    },
    show: {
      handler (newV) {
        if (newV) {
          this.$nextTick(() => {
            const _dom = document.getElementById('hevue-imgpreview-wrap')
            _dom.onmousewheel = this.scrollFunc
            // 火狐浏览器没有onmousewheel事件，用DOMMouseScroll代替(滚轮事件)
            document.body.addEventListener('DOMMouseScroll', this.scrollFunc)
            // 禁止火狐浏览器下拖拽图片的默认事件
            document.ondragstart = function () {
              return false
            }
            // 判断是否多图
            if (this.multiple) {
              if (Array.isArray(this.imgList) && this.imgList.length > 0) {
                this.imgIndex = Number(this.nowImgIndex) || 0
                // this.url = this.imgList[this.imgIndex]
                this.changeUrl(this.imgList[this.imgIndex], this.imgIndex)
              } else {
                // console.error("imgList 为空或格式不正确");
              }
            } else {
              this.changeUrl(this.url)
            }
            // 判断是否开启键盘事件
            if (this.keyboard) {
              document.addEventListener('keydown', this.keyHandleDebounce)
            }
          })
        }
      },
      immediate: true
    }
  },
  methods: {
    init () {
      this.show = true
    },
    close () {
      // this.initImg();
      // this.maxWH = "max-width:100%;max-height:100%;";
      // this.isFull = false;
      // 移除火狐浏览器下的鼠标滚动事件
      document.body.removeEventListener('DOMMouseScroll', this.scrollFunc)
      // 恢复火狐及Safari浏览器下的图片拖拽
      document.ondragstart = null
      // 移除键盘事件
      if (this.keyboard) {
        document.removeEventListener('keydown', this.keyHandleDebounce)
      }
      this.show = false
    },
    initImg () {
      this.mobileScale = 1
      this.imgScale = 1
      this.imgRotate = 0
      this.imgTop = 0
      this.imgLeft = 0
    },
    /**
     * 切换图片
     * true 下一张
     * false 上一张
     */
    toogleImg (bool) {
      if (bool) {
        this.imgIndex++
        if (this.imgIndex > this.imgList.length - 1) {
          this.imgIndex = 0
        }
      } else {
        this.imgIndex--
        if (this.imgIndex < 0) {
          this.imgIndex = this.imgList.length - 1
        }
      }
      // this.url = this.imgList[this.imgIndex]
      this.changeUrl(this.imgList[this.imgIndex], this.imgIndex)
    },
    // 改变图片地址
    /**
     * @description:
     * @param {String} url 要显示的图片的url
     * @param {Number} index 当前显示当图片下标，防止用户点击切换图片过快
     * @return {*}
     */
    changeUrl (url, index) {
      this.imgState = 1
      const img = new Image()
      img.src = url
      img.onload = () => {
        // 如果加载出来图片当下标不是当前显示图片当下标，则不予显示（用户点击过快当时候，会出现用户点到第三张了，此时第一张图片才加载完当情况）
        if (index !== undefined && index === this.imgIndex) {
          this.imgState = 2
          this.imgurl = url
        } else if (index === undefined) {
          this.imgState = 2
          this.imgurl = url
        }
      }
      img.onerror = () => {
        if (index !== undefined && index === this.imgIndex) {
          this.imgState = 3
        } else if (index === undefined) {
          this.imgState = 3
        }
      }
    },
    // 旋转图片
    rotateFunc (deg) {
      this.imgRotate += deg
    },
    // 图片缩放
    scaleFunc (num, bool) {
      if (this.imgScale <= 0.2 && num < 0) return
      if (bool) {
        this.imgScale = num
      } else {
        this.imgScale += num
      }
    },
    // 图片原尺寸切换
    imgToggle () {
      this.initImg()
      if (this.isFull) {
        this.maxWH = 'max-width:100%;max-height:100%;'
      } else {
        this.maxWH = ''
      }
      this.isFull = !this.isFull
    },
    // 鼠标滚轮缩放
    scrollFunc (e) {
      e = e || window.event
      // e.returnValue = false // ie
      // 火狐下没有wheelDelta，用detail代替，由于detail值的正负和wheelDelta相反，所以取反
      e.delta = e.wheelDelta || -e.detail

      e.preventDefault()
      if (e.delta > 0) {
        // 当滑轮向上滚动时
        this.scaleFunc(0.05)
      }
      if (e.delta < 0) {
        // 当滑轮向下滚动时
        this.scaleFunc(-0.05)
      }
    },
    // 鼠标按下
    addMove (e) {
      e = e || window.event
      this.clientX = e.clientX
      this.clientY = e.clientY
      this.$refs.heImg.onmousemove = this.moveFunc
    },
    // 手指按下事件
    addMoveMobile (e) {
      e.preventDefault()
      e = e || window.event
      if (e.touches.length > 1) {
        this.start = e.touches
      } else {
        this.clientX = e.touches[0].pageX
        this.clientY = e.touches[0].pageY
      }
      // 添加手指拖动事件
      this.$refs.heImg.ontouchmove = this.moveFuncMobile
    },
    // 鼠标拖动
    moveFunc (e) {
      e = e || window.event
      e.preventDefault()
      const movementX = e.clientX - this.clientX
      const movementY = e.clientY - this.clientY
      // event.clientY;
      this.imgLeft += movementX * 2
      this.imgTop += movementY * 2
      this.clientX = e.clientX
      this.clientY = e.clientY
    },
    // 手指拖动
    moveFuncMobile (e) {
      e = e || window.event
      // console.log(e);
      if (e.touches.length > 1) {
        var now = e.touches
        var scale =
            this.getDistance(now[0], now[1]) /
            this.getDistance(this.start[0], this.start[1])
        // 判断是否手指缩放过，如果缩放过，要在上次缩放的比例基础上进行缩放
        if (this.mobileScale) {
          if (scale > 1) {
            // 放大
            this.scaleFunc(scale + this.mobileScale - 1, true)
          } else {
            // 缩小
            this.scaleFunc(scale * this.mobileScale, true)
          }
        } else {
          this.scaleFunc(scale, true)
        }
      } else {
        const touch = e.touches[0]
        e.preventDefault()
        const movementX = touch.pageX - this.clientX
        const movementY = touch.pageY - this.clientY
        // event.clientY;
        this.imgLeft += movementX * 2
        this.imgTop += movementY * 2
        this.clientX = touch.pageX
        this.clientY = touch.pageY
      }
    },
    // 移除拖动事件
    removeMove (type) {
      if (type === 'pc') {
        this.$refs.heImg.onmousemove = null
      } else {
        this.mobileScale = this.imgScale
        this.$refs.heImg.ontouchmove = null
      }
    },
    keyHandleDebounce (e) {
      if (this.canRun) {
        // 如果this.canRun为true证明当前可以执行函数
        this.keyHandle(e)
        this.canRun = false // 执行函数后一段时间内不可再次执行
        setTimeout(() => {
          this.canRun = true // 等到了我们设定的时间之后，把this.canRun改为true，可以再次执行函数
        }, 300)
      }
    },
    // 键盘事件
    keyHandle (e) {
      e = window.event || e
      var key = e.keyCode || e.which || e.charCode
      switch (key) {
        case 27: // esc
          this.close()
          break
        case 65: // a键-上一张
          if (this.multiple) {
            this.toogleImg(false)
          }
          break
        case 68: // d键-下一张
          if (this.multiple) {
            this.toogleImg(true)
          }
          break
        case 87: // w键-放大
          this.scaleFunc(0.15)
          break
        case 83: // s键-缩小
          this.scaleFunc(-0.15)
          break
        case 81: // q键-逆时针旋转
          this.rotateFunc(-90)
          break
        case 69: // e键-顺时针旋转
          this.rotateFunc(90)
          break
        case 82: // r键-复位键
          this.initImg()
          break

        default:
          break
      }
    },
    // 点击遮罩层
    clickMask () {
      // console.log("hello");
      if (this.clickMaskCLose) {
        this.close()
      }
    },
    // 缩放 勾股定理方法-求两点之间的距离
    getDistance (p1, p2) {
      var x = p2.pageX - p1.pageX
      var y = p2.pageY - p1.pageY
      return Math.sqrt(x * x + y * y)
    },
    /**
     * @description:
     * @param {String} imgsrc
     * @param {*} name
     * @return {*}
     */
    downloadIamge () {
      // 下载图片地址和图片名
      const image = new Image()
      // 解决跨域 Canvas 污染问题
      image.setAttribute('crossOrigin', 'anonymous')
      image.onload = function () {
        const canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height
        const context = canvas.getContext('2d')
        context.drawImage(image, 0, 0, image.width, image.height)
        const url = canvas.toDataURL('image/png') // 得到图片的base64编码数据
        const a = document.createElement('a') // 生成一个a元素
        const event = new MouseEvent('click') // 创建一个单击事件
        a.download = 'photo' + +new Date() // 设置图片名称
        a.href = url // 将生成的URL设置为a.href属性
        a.dispatchEvent(event) // 触发a的单击事件
      }
      image.onerror = function (err) {
        console.log('图片信息不正确或图片服务器禁止访问')
        console.log(err)
      }
      if (this.multiple) {
        image.src = this.imgList[this.imgIndex]
      } else {
        image.src = this.url
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/Image-Preview/src/multi-image-preview.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_multi_image_previewvue_type_script_lang_js_ = (multi_image_previewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Image-Preview/src/multi-image-preview.vue?vue&type=style&index=0&id=7bf62f62&scoped=true&lang=css&
var multi_image_previewvue_type_style_index_0_id_7bf62f62_scoped_true_lang_css_ = __webpack_require__("c15b");

// CONCATENATED MODULE: ./packages/Image-Preview/src/multi-image-preview.vue






/* normalize component */

var multi_image_preview_component = normalizeComponent(
  src_multi_image_previewvue_type_script_lang_js_,
  multi_image_previewvue_type_template_id_7bf62f62_scoped_true_render,
  multi_image_previewvue_type_template_id_7bf62f62_scoped_true_staticRenderFns,
  false,
  null,
  "7bf62f62",
  null
  
)

/* harmony default export */ var multi_image_preview = (multi_image_preview_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Image-Preview/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Image_Preview_srcvue_type_script_lang_js_ = ({
  name: "ZImagePreview",
  props: {
    imgList: {
      type: Array,
      default () {
        return []
      }
    },
    width: {
      type: String,
      default: '150px'
    },
    height: {
      type: String,
      default: '150px'
    },
    fit: {
      type: String,
      default: 'cover'
    }
  },
  data () {
    return {
      imgIndex: 0,
      multiImageVisible: false
    }
  },
  components: {
    MultiImagePreview: multi_image_preview
  },
  methods: {
    showPhotoPreview (index) {
      this.imgIndex = index
      this.multiImageVisible = true
      this.$nextTick(() => {
        this.$refs.multiImagePreview.init()
      })
    }
  }
});

// CONCATENATED MODULE: ./packages/Image-Preview/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Image_Preview_srcvue_type_script_lang_js_ = (Image_Preview_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/Image-Preview/src/index.vue





/* normalize component */

var src_component = normalizeComponent(
  packages_Image_Preview_srcvue_type_script_lang_js_,
  srcvue_type_template_id_40338582_scoped_true_render,
  srcvue_type_template_id_40338582_scoped_true_staticRenderFns,
  false,
  null,
  "40338582",
  null
  
)

/* harmony default export */ var Image_Preview_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/Image-Preview/index.js
// 导入组件，组件必须声明 name

// 为组件提供 install 安装方法，供按需引入
Image_Preview_src.install = function (Vue) {
    Vue.component(Image_Preview_src.name, Image_Preview_src)
}
// 导出组件
/* harmony default export */ var Image_Preview = (Image_Preview_src);

// CONCATENATED MODULE: ./packages/index.js
// 导入button组件



// 组件列表
const components = [
    Button,
    Image_Preview
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    ZButton: Button,
    ZImagePreview: Image_Preview
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=zui.umd.js.map