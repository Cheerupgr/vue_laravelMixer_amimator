webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
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
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(54);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Main_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Main_vue__);



new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    components: { MainContainer: __WEBPACK_IMPORTED_MODULE_1__components_Main_vue___default.a }
});

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(9)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(14)
/* template */
var __vue_template__ = __webpack_require__(53)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Main.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e13bc20", Component.options)
  } else {
    hotAPI.reload("data-v-2e13bc20", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("6382f793", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2e13bc20\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Main.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2e13bc20\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Main.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "\n.main-container {\n}\n", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(13)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Comp1_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Comp1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Comp1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Comp2_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Comp2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Comp2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Comp3_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Comp3_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Comp3_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Comp4_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Comp4_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Comp4_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Comp5_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Comp5_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Comp5_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Comp6_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Comp6_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Comp6_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Comp7_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Comp7_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Comp7_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Comp8_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Comp8_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Comp8_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Comp9_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Comp9_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Comp9_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Comp10_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Comp10_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Comp10_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Comp11_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Comp11_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__Comp11_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Comp12_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Comp12_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Comp12_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Comp13_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Comp13_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__Comp13_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Comp14_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Comp14_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__Comp14_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Comp15_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Comp15_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__Comp15_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Comp16_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Comp16_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__Comp16_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Comp17_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Comp17_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__Comp17_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//



















/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            pages: [__WEBPACK_IMPORTED_MODULE_0__Comp1_vue___default.a, __WEBPACK_IMPORTED_MODULE_1__Comp2_vue___default.a, __WEBPACK_IMPORTED_MODULE_2__Comp3_vue___default.a, __WEBPACK_IMPORTED_MODULE_3__Comp4_vue___default.a, __WEBPACK_IMPORTED_MODULE_4__Comp5_vue___default.a, __WEBPACK_IMPORTED_MODULE_5__Comp6_vue___default.a, __WEBPACK_IMPORTED_MODULE_6__Comp7_vue___default.a, __WEBPACK_IMPORTED_MODULE_7__Comp8_vue___default.a, __WEBPACK_IMPORTED_MODULE_8__Comp9_vue___default.a, __WEBPACK_IMPORTED_MODULE_9__Comp10_vue___default.a, __WEBPACK_IMPORTED_MODULE_10__Comp11_vue___default.a, __WEBPACK_IMPORTED_MODULE_11__Comp12_vue___default.a, __WEBPACK_IMPORTED_MODULE_12__Comp13_vue___default.a, __WEBPACK_IMPORTED_MODULE_13__Comp14_vue___default.a, __WEBPACK_IMPORTED_MODULE_14__Comp15_vue___default.a, __WEBPACK_IMPORTED_MODULE_15__Comp16_vue___default.a, __WEBPACK_IMPORTED_MODULE_16__Comp17_vue___default.a],
            pageNum: 0,
            currentComponent: null
        };
    },
    mounted: function mounted() {
        this.currentComponent = this.pages[this.pageNum];
    },

    methods: {
        handleScroll: function handleScroll(e) {
            if (e.deltaY > 20) {
                this.showNextScreen();
            } else if (e.deltaY < -20) {
                this.showPrevScreen();
            }
        },
        showNextScreen: function showNextScreen() {
            if (this.pageNum < this.pages.length - 1) {
                this.pageNum = this.pageNum + 1;
            } else {
                return;
            }

            this.currentComponent = this.pages[this.pageNum];
        },
        showPrevScreen: function showPrevScreen() {
            if (this.pageNum == 0) {
                return;
            } else {
                this.pageNum = this.pageNum - 1;
            }

            this.currentComponent = this.pages[this.pageNum];
        }
    },
    components: {
        Comp1: __WEBPACK_IMPORTED_MODULE_0__Comp1_vue___default.a
    }
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(16)
/* template */
var __vue_template__ = __webpack_require__(17)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Comp1.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f032b4a", Component.options)
  } else {
    hotAPI.reload("data-v-1f032b4a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "win-height" }, [
      _c("div", { staticClass: "inner-content" }, [
        _c("div", { staticClass: "text-wrap" }, [
          _c("span", { staticClass: "title" }, [_vm._v("This Is")]),
          _vm._v(" "),
          _c("div", { staticClass: "logo" }, [
            _c("a", { attrs: { href: "#" } }, [
              _c("img", {
                attrs: {
                  src: "/resources/assets/images/logo-xl.svg",
                  width: "386"
                }
              })
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1f032b4a", module.exports)
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(19)
/* template */
var __vue_template__ = __webpack_require__(20)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Comp2.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ee6fc48", Component.options)
  } else {
    hotAPI.reload("data-v-1ee6fc48", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_animejs__);
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            width: null,
            hieght: null,
            mouseState: {
                top: null,
                left: null
            },
            move: {
                x: 0,
                y: 0
            }
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.width = window.innerWidth;
        this.height = window.innerHeight;
        var update = function update() {
            _this.animate(_this.move.x, _this.move.y);
            setTimeout(function () {
                update();
            }, 500);
        };
        update();
    },

    methods: {
        handleMouseMove: function handleMouseMove(e) {
            var moveX = 2 * e.screenX / this.width - 1;
            var moveY = 2 * e.screenY / this.height - 1;
            this.move.x = moveX;
            this.move.y = moveY;
        },
        animate: function animate(moveX, moveY) {
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: this.$refs.image,
                scale: 1.2,
                easing: 'easeInOutQuad',
                translateX: this.width * 0.05 * moveX * -1,
                translateY: this.height * 0.05 * moveY * -1,
                duration: 500
            });
        }
    }
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "win-height",
      on: {
        mousemove: function($event) {
          _vm.handleMouseMove($event)
        }
      }
    },
    [
      _c("div", { staticClass: "inner-content" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "img img-xl" }, [
          _c("img", {
            ref: "image",
            attrs: { src: "/resources/assets/images/illustration01.svg" }
          })
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-wrap" }, [
      _c("strong", { staticClass: "text" }, [_vm._v("The teams we help")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1ee6fc48", module.exports)
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(60)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(22)
/* template */
var __vue_template__ = __webpack_require__(62)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1ecacd46"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Comp3.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ecacd46", Component.options)
  } else {
    hotAPI.reload("data-v-1ecacd46", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_animejs__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        // let path = anime.path(this.$refs.path)

        // anime({
        //     targets: this.$refs.woman,
        //     translateX: path('x'),
        //     translateY: path('y'),
        //     easing: 'linear',
        //     duration: 2000
        // })
    }
});

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(25)
/* template */
var __vue_template__ = __webpack_require__(26)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Comp4.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1eae9e44", Component.options)
  } else {
    hotAPI.reload("data-v-1eae9e44", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_animejs__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        __WEBPACK_IMPORTED_MODULE_0_animejs___default.a.timeline().add({
            targets: this.$refs.path_right,
            strokeDashoffset: [__WEBPACK_IMPORTED_MODULE_0_animejs___default.a.setDashoffset, 0],
            duration: 3000,
            easing: 'linear'
        }).add({
            offset: '-=3000',
            targets: this.$refs.path_left,
            strokeDashoffset: [__WEBPACK_IMPORTED_MODULE_0_animejs___default.a.setDashoffset, 0],
            duration: 3000,
            easing: 'linear'
        }).add({
            targets: this.$refs.circle,
            opacity: 1,
            duration: 300,
            easing: 'linear'
        });
    }
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "win-height" }, [
    _c("div", { staticClass: "inner-content" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { ref: "svg", staticClass: "img img-xl" }, [
        _c(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              width: "1440px",
              height: "259px",
              viewBox: "0 0 1440 259",
              version: "1.1"
            }
          },
          [
            _c("title", [_vm._v("Illustration")]),
            _vm._v(" "),
            _c("desc", [_vm._v("Created with Sketch.")]),
            _vm._v(" "),
            _c("defs"),
            _vm._v(" "),
            _c(
              "g",
              {
                attrs: {
                  id: "Mayven-2.0",
                  stroke: "none",
                  "stroke-width": "1",
                  fill: "none",
                  "fill-rule": "evenodd"
                }
              },
              [
                _c(
                  "g",
                  {
                    attrs: {
                      id: "The-Teams-We-Help",
                      transform: "translate(0.000000, -2676.000000)"
                    }
                  },
                  [
                    _c(
                      "g",
                      {
                        attrs: {
                          id: "4",
                          transform: "translate(-21.000000, 2292.000000)"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              id: "Container",
                              transform: "translate(0.000000, 216.000000)"
                            }
                          },
                          [
                            _c(
                              "g",
                              {
                                attrs: {
                                  id: "Illustration",
                                  transform: "translate(0.000000, 169.000000)"
                                }
                              },
                              [
                                _c("path", {
                                  ref: "path_right",
                                  attrs: {
                                    id: "Path-14",
                                    stroke: "#FFFFFF",
                                    "stroke-width": "2",
                                    opacity: "0.200000003",
                                    d:
                                      "M1652.68359 121.910156 1601.00155 121.910156 1601.00155 150.880879 1569.7478 150.880879 1569.7478 123.737829 1534.58591 123.737829 1534.58591 150.880879 1499.83203 150.880879 1499.83203 123.737829 1461.78516 123.737829 1461.78516 150.880879 1431.09766 150.880879 1431.09766 121.910156 1431.09766 88.2539062 1398.875 88.2539062 1398.875 123.737829 1364.64062 123.737829 1364.64062 88.2539062 1329.53125 88.2539062 1329.53125 123.737829 1296.35156 123.737829 1296.35156 88.2539062 1260.01172 88.2539062 1260.01172 123.737829 1260.01172 150.880879 1223.91016 150.880879 1223.91016 123.737829 1190.55469 123.737829 1190.55469 150.880879 1157.11719 150.880879 1157.11719 123.737829 1123.90234 123.737829 1123.90234 150.880879 1091.51172 150.880879 1091.51172 123.737829 1057.60938 123.737829 1057.60938 150.880879 1021.61719 150.880879 1021.61719 88.2539062 989.550781 88.2539062 989.550781 123.737829 956.863281 123.737829 956.863281 88.2539062 924.855469 88.2539062 924.855469 123.737829 892.652344 123.737829 892.652344 88.2539062 862.667969 88.2539062 862.667969 123.737829 791.358544 123.737829"
                                  }
                                }),
                                _vm._v(" "),
                                _c("circle", {
                                  attrs: {
                                    id: "Oval-9",
                                    stroke: "#4B606B",
                                    "stroke-width": "2",
                                    cx: "741",
                                    cy: "124",
                                    r: "50"
                                  }
                                }),
                                _vm._v(" "),
                                _c("circle", {
                                  ref: "circle",
                                  attrs: {
                                    id: "Oval-9",
                                    fill: "#D8D8D8",
                                    opacity: "0.200000003",
                                    cx: "741",
                                    cy: "124",
                                    r: "33"
                                  }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  ref: "path_left",
                                  attrs: {
                                    id: "Path-13",
                                    stroke: "#FFFFFF",
                                    "stroke-width": "2",
                                    opacity: "0.200000003",
                                    d:
                                      "M0.34375 55.515625 41.8040039 55.515625 41.8040039 81.5635076 69.9314265 81.5635076 69.9314265 54.7697882 100.253932 54.7697882 100.253932 27.1564701 70.3130029 27.1564701 70.3130029 0.49102646 100.154893 0.49102646 133.845696 0.49102646 133.845696 29.6640913 133.845696 55.5825759 163.977671 55.5825759 163.977671 82.1011988 134.651157 82.1011988 100.285368 82.1011988 100.285368 110.739851 68.0236668 110.739851 68.0236668 136.546981 40.627583 136.546981 40.627583 163.315879 69.355566 163.315879 99.1544756 163.315879 99.1544756 137.868778 129.825463 137.868778 129.825463 164.739954 159.247459 164.739954 159.247459 138.037581 159.247459 110.308585 189.741023 110.308585 189.741023 137.97602 220.510396 137.97602 220.510396 167.367669 191.127493 167.367669 191.127493 194.337832 160.679572 194.337832 133.193467 194.337832 133.193467 225.165154 163.067334 225.165154 188.595628 225.165154 188.595628 256.674161 217.847735 256.674161 217.847735 229.310399 247.824441 229.310399 247.824441 201.421493 278.546875 201.421493 278.546875 169.460462 278.546875 139.370349 252.422849 139.370349 252.422849 111.833208 227.603034 111.833208 227.603034 84.022564 196.107199 84.022564 196.107199 58.8312123 227.090159 58.8312123 227.090159 30.1898884 259.042484 30.1898884 259.042484 61.3274621 288.276116 61.3274621 288.276116 92.4623137 317.378054 92.4623137 317.378054 121.106129 317.378054 148.777013 349.475593 148.777013 349.475593 178.368636 317.882031 178.368636 317.882031 206.164432 317.882031 232.250845 348.305666 232.250845 348.305666 207.162562 380.719904 207.162562 380.719904 179.025364 380.719904 147.948792 380.719904 121.153291 353.821741 121.153291 353.821741 89.0218769 383.417319 89.0218769 383.417319 58.3953962 416.172014 58.3953962 416.172014 89.1881348 416.172014 121.198516 416.172014 149.760524 416.172014 179.491749 449.688656 179.491749 449.688656 210.304747 484.642237 210.304747 484.642237 180.854022 484.642237 152.767731 456.0848 152.767731 456.0848 124.851449 485.250449 124.851449 485.250449 92.7795266 455.749081 92.7795266 455.749081 64.2081321 484.995502 64.2081321 521.772645 64.2081321 521.772645 95.5361788 521.772645 128.250183 521.772645 155.095115 521.772645 178.664843 553.908592 178.664843 553.908592 148.737028 585.256026 148.737028 585.256026 122.039516 555.179702 122.039516 555.179702 93.21092 585.655275 93.21092 618.996097 93.21092 618.996097 124.102591 690.623524 124.102591"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-wrap" }, [
      _c("strong", { staticClass: "text" }, [
        _vm._v("We Design and Build "),
        _c("br"),
        _vm._v("Products together")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1eae9e44", module.exports)
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(28)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Comp5.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e926f42", Component.options)
  } else {
    hotAPI.reload("data-v-1e926f42", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "win-height" }, [
      _c("div", { staticClass: "inner-content" }, [
        _c("div", { staticClass: "text-wrap" }, [
          _c("strong", { staticClass: "text" }, [
            _vm._v("We define product as anything "),
            _c("br"),
            _vm._v("integral to your business")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "img" }, [
          _c("img", {
            attrs: { src: "/resources/assets/images/illustration04.svg" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e926f42", module.exports)
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(63)
/* template */
var __vue_template__ = __webpack_require__(30)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Comp6.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e764040", Component.options)
  } else {
    hotAPI.reload("data-v-1e764040", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "win-height" }, [
    _c("div", { staticClass: "inner-content" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "img" }, [
        _c(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              width: "691px",
              height: "223px",
              viewBox: "0 0 691 223",
              version: "1.1"
            }
          },
          [
            _c("title", [_vm._v("Illustration")]),
            _vm._v(" "),
            _c("desc", [_vm._v("Created with Sketch.")]),
            _vm._v(" "),
            _c("defs"),
            _vm._v(" "),
            _c(
              "g",
              {
                attrs: {
                  id: "Mayven-2.0",
                  stroke: "none",
                  "stroke-width": "1",
                  fill: "none",
                  "fill-rule": "evenodd"
                }
              },
              [
                _c(
                  "g",
                  {
                    attrs: {
                      id: "The-Teams-We-Help",
                      transform: "translate(-375.000000, -4216.000000)",
                      stroke: "#FFFFFF",
                      "stroke-width": "2"
                    }
                  },
                  [
                    _c(
                      "g",
                      {
                        attrs: {
                          id: "6",
                          transform: "translate(0.000000, 3820.000000)"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              id: "Content",
                              transform: "translate(336.000000, 209.000000)"
                            }
                          },
                          [
                            _c(
                              "g",
                              {
                                attrs: {
                                  id: "Illustration",
                                  transform: "translate(39.000000, 188.000000)"
                                }
                              },
                              [
                                _c(
                                  "g",
                                  {
                                    attrs: {
                                      id: "Row",
                                      transform:
                                        "translate(0.000000, 160.000000)"
                                    }
                                  },
                                  [
                                    _c(
                                      "g",
                                      {
                                        ref: "Person1",
                                        attrs: { opacity: "0" }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person2",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(60.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person3",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(120.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person4",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(180.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person5",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(240.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person6",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(300.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person7",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(360.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person8",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(420.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person9",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(480.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person10",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(540.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person11",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(600.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person12",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(660.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "g",
                                  {
                                    attrs: {
                                      id: "Row",
                                      transform:
                                        "translate(0.000000, 80.000000)"
                                    }
                                  },
                                  [
                                    _c(
                                      "g",
                                      {
                                        ref: "Person13",
                                        attrs: { opacity: "0" }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person14",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(60.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person15",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(120.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person16",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(180.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person17",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(240.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person18",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(300.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person19",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(360.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person20",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(420.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person21",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(480.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person22",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(540.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person23",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(600.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "g",
                                      {
                                        ref: "Person24",
                                        attrs: {
                                          opacity: "0",
                                          transform:
                                            "translate(660.000000, 0.000000)"
                                        }
                                      },
                                      [
                                        _c("ellipse", {
                                          attrs: {
                                            id: "Oval-10",
                                            cx: "15.5",
                                            cy: "7",
                                            rx: "7.5",
                                            ry: "7"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                            id: "Path-15"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                            id: "Path-15",
                                            transform:
                                              "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("g", { attrs: { id: "Row" } }, [
                                  _c(
                                    "g",
                                    {
                                      ref: "Person25",
                                      attrs: { opacity: "0" }
                                    },
                                    [
                                      _c("ellipse", {
                                        attrs: {
                                          id: "Oval-10",
                                          cx: "15.5",
                                          cy: "7",
                                          rx: "7.5",
                                          ry: "7"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                          id: "Path-15"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                          id: "Path-15",
                                          transform:
                                            "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      ref: "Person26",
                                      attrs: {
                                        opacity: "0",
                                        transform:
                                          "translate(60.000000, 0.000000)"
                                      }
                                    },
                                    [
                                      _c("ellipse", {
                                        attrs: {
                                          id: "Oval-10",
                                          cx: "15.5",
                                          cy: "7",
                                          rx: "7.5",
                                          ry: "7"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                          id: "Path-15"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                          id: "Path-15",
                                          transform:
                                            "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      ref: "Person27",
                                      attrs: {
                                        opacity: "0",
                                        transform:
                                          "translate(120.000000, 0.000000)"
                                      }
                                    },
                                    [
                                      _c("ellipse", {
                                        attrs: {
                                          id: "Oval-10",
                                          cx: "15.5",
                                          cy: "7",
                                          rx: "7.5",
                                          ry: "7"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                          id: "Path-15"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                          id: "Path-15",
                                          transform:
                                            "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      ref: "Person28",
                                      attrs: {
                                        opacity: "0",
                                        transform:
                                          "translate(180.000000, 0.000000)"
                                      }
                                    },
                                    [
                                      _c("ellipse", {
                                        attrs: {
                                          id: "Oval-10",
                                          cx: "15.5",
                                          cy: "7",
                                          rx: "7.5",
                                          ry: "7"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                          id: "Path-15"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                          id: "Path-15",
                                          transform:
                                            "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      ref: "Person29",
                                      attrs: {
                                        opacity: "0",
                                        transform:
                                          "translate(240.000000, 0.000000)"
                                      }
                                    },
                                    [
                                      _c("ellipse", {
                                        attrs: {
                                          id: "Oval-10",
                                          cx: "15.5",
                                          cy: "7",
                                          rx: "7.5",
                                          ry: "7"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                          id: "Path-15"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                          id: "Path-15",
                                          transform:
                                            "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      ref: "Person30",
                                      attrs: {
                                        opacity: "0",
                                        transform:
                                          "translate(300.000000, 0.000000)"
                                      }
                                    },
                                    [
                                      _c("ellipse", {
                                        attrs: {
                                          id: "Oval-10",
                                          cx: "15.5",
                                          cy: "7",
                                          rx: "7.5",
                                          ry: "7"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                          id: "Path-15"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                          id: "Path-15",
                                          transform:
                                            "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      ref: "Person31",
                                      attrs: {
                                        opacity: "0",
                                        transform:
                                          "translate(360.000000, 0.000000)"
                                      }
                                    },
                                    [
                                      _c("ellipse", {
                                        attrs: {
                                          id: "Oval-10",
                                          cx: "15.5",
                                          cy: "7",
                                          rx: "7.5",
                                          ry: "7"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                          id: "Path-15"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                          id: "Path-15",
                                          transform:
                                            "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      ref: "Person32",
                                      attrs: {
                                        opacity: "0",
                                        transform:
                                          "translate(420.000000, 0.000000)"
                                      }
                                    },
                                    [
                                      _c("ellipse", {
                                        attrs: {
                                          id: "Oval-10",
                                          cx: "15.5",
                                          cy: "7",
                                          rx: "7.5",
                                          ry: "7"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                          id: "Path-15"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                          id: "Path-15",
                                          transform:
                                            "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      ref: "Person33",
                                      attrs: {
                                        opacity: "0",
                                        transform:
                                          "translate(480.000000, 0.000000)"
                                      }
                                    },
                                    [
                                      _c("ellipse", {
                                        attrs: {
                                          id: "Oval-10",
                                          cx: "15.5",
                                          cy: "7",
                                          rx: "7.5",
                                          ry: "7"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                          id: "Path-15"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                          id: "Path-15",
                                          transform:
                                            "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      ref: "Person34",
                                      attrs: {
                                        opacity: "0",
                                        transform:
                                          "translate(540.000000, 0.000000)"
                                      }
                                    },
                                    [
                                      _c("ellipse", {
                                        attrs: {
                                          id: "Oval-10",
                                          cx: "15.5",
                                          cy: "7",
                                          rx: "7.5",
                                          ry: "7"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                          id: "Path-15"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                          id: "Path-15",
                                          transform:
                                            "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      ref: "Person35",
                                      attrs: {
                                        opacity: "0",
                                        transform:
                                          "translate(600.000000, 0.000000)"
                                      }
                                    },
                                    [
                                      _c("ellipse", {
                                        attrs: {
                                          id: "Oval-10",
                                          cx: "15.5",
                                          cy: "7",
                                          rx: "7.5",
                                          ry: "7"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                          id: "Path-15"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                          id: "Path-15",
                                          transform:
                                            "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      ref: "Person36",
                                      attrs: {
                                        opacity: "0",
                                        transform:
                                          "translate(660.000000, 0.000000)"
                                      }
                                    },
                                    [
                                      _c("ellipse", {
                                        attrs: {
                                          id: "Oval-10",
                                          cx: "15.5",
                                          cy: "7",
                                          rx: "7.5",
                                          ry: "7"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M25.3865238,19.0136277 L21.1644256,61 L23.5839684,61 L23.5839684,44.223603 L27.4879531,43.4609825 L29.9438465,22.9469896 L25.3865238,19.0136277 Z",
                                          id: "Path-15"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M5.32770024,19.0136277 L1.10560209,61 L3.52514486,61 L3.52514486,44.223603 L7.42912953,43.4609825 L9.885023,22.9469896 L5.32770024,19.0136277 Z",
                                          id: "Path-15",
                                          transform:
                                            "translate(5.470588, 39.500000) scale(-1, 1) translate(-5.470588, -39.500000) "
                                        }
                                      })
                                    ]
                                  )
                                ])
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-wrap" }, [
      _c("strong", { staticClass: "text" }, [
        _vm._v("Products that are offered "),
        _c("br"),
        _vm._v("direct to consumer")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e764040", module.exports)
  }
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(32)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Comp7.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e5a113e", Component.options)
  } else {
    hotAPI.reload("data-v-1e5a113e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "win-height" }, [
      _c("div", { staticClass: "inner-content" }, [
        _c("div", { staticClass: "text-wrap" }, [
          _c("strong", { staticClass: "text" }, [
            _vm._v("Or as a part of your "),
            _c("br"),
            _vm._v("enterprise solution")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "img" }, [
          _c("img", {
            attrs: { src: "/resources/assets/images/illustration06.svg" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e5a113e", module.exports)
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(34)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Comp8.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e3de23c", Component.options)
  } else {
    hotAPI.reload("data-v-1e3de23c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "win-height" }, [
      _c("div", { staticClass: "inner-content" }, [
        _c("div", { staticClass: "text-wrap" }, [
          _c("strong", { staticClass: "text" }, [
            _vm._v("Design of Software is fundamentally "),
            _c("br"),
            _vm._v("about Usability and Delight")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "img" }, [
          _c("img", {
            attrs: { src: "/resources/assets/images/illustration07.svg" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e3de23c", module.exports)
  }
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(64)
/* template */
var __vue_template__ = __webpack_require__(36)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Comp9.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e21b33a", Component.options)
  } else {
    hotAPI.reload("data-v-1e21b33a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "cover", staticClass: "win-height" }, [
    _c("div", { staticClass: "inner-content" }, [
      _c("div", { ref: "title", staticClass: "text-wrap" }, [
        _c("strong", { staticClass: "text" }, [
          _vm._v("So We Work to Understand Your Users")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "img" }, [
        _c(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              width: "310px",
              height: "310px",
              viewBox: "0 0 310 310",
              version: "1.1"
            }
          },
          [
            _c("title", [_vm._v("Illustration")]),
            _vm._v(" "),
            _c("desc", [_vm._v("Created with Sketch.")]),
            _vm._v(" "),
            _c("defs"),
            _vm._v(" "),
            _c(
              "g",
              {
                attrs: {
                  id: "Mayven-2.0",
                  stroke: "none",
                  "stroke-width": "1",
                  fill: "none",
                  "fill-rule": "evenodd"
                }
              },
              [
                _c(
                  "g",
                  {
                    attrs: {
                      id: "The-Teams-We-Help",
                      transform: "translate(-565.000000, -6422.000000)"
                    }
                  },
                  [
                    _c(
                      "g",
                      {
                        attrs: {
                          id: "9",
                          transform: "translate(0.000000, 6112.000000)"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              id: "Content",
                              transform: "translate(180.000000, 200.000000)"
                            }
                          },
                          [
                            _c(
                              "g",
                              {
                                attrs: {
                                  id: "Illustration",
                                  transform: "translate(387.000000, 112.000000)"
                                }
                              },
                              [
                                _c("circle", {
                                  ref: "circle1",
                                  attrs: {
                                    id: "Light",
                                    stroke: "#FFFFFF",
                                    "stroke-width": "2",
                                    opacity: "0.100000001",
                                    cx: "153",
                                    cy: "153",
                                    r: "154"
                                  }
                                }),
                                _vm._v(" "),
                                _c("circle", {
                                  ref: "circle2",
                                  attrs: {
                                    id: "Light",
                                    stroke: "#FFFFFF",
                                    "stroke-width": "2",
                                    opacity: "0.200000003",
                                    cx: "153",
                                    cy: "153",
                                    r: "110"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "g",
                                  {
                                    attrs: {
                                      id: "Bulb",
                                      transform:
                                        "translate(102.000000, 83.000000)"
                                    }
                                  },
                                  [
                                    _c("path", {
                                      ref: "lamp",
                                      attrs: {
                                        d:
                                          "M82.7822266,91.063341 C93.7699483,83.3308433 102,66.8226046 102,51 C102,22.8334778 79.1665222,0 51,0 C22.8334778,0 0,22.8334778 0,51 C0,67.2494734 7.68599757,81.5403073 19.4382422,91.063341 C27.2050781,97.3569336 31.2146168,97.3472953 31.8693265,101.934158 C31.9910659,102.787058 32.1202302,109.079354 32.1202302,109.079354 C32.1202302,109.079354 71.8556132,109.079354 71.8556132,109.020766 C71.8556132,108.962178 71.8556132,103.783302 71.8556132,102.521973 C71.8556132,98.3744361 77.8827219,94.5113177 82.7822266,91.063341 Z",
                                        id: "Oval-12",
                                        fill: "#FFFFFF"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("path", {
                                      ref: "lamp_outline2",
                                      attrs: {
                                        d:
                                          "M82.7822266,91.063341 C93.7699483,83.3308433 102,66.8226046 102,51 C102,22.8334778 79.1665222,0 51,0 C22.8334778,0 0,22.8334778 0,51 C0,67.2494734 7.68599757,81.5403073 19.4382422,91.063341 C27.2050781,97.3569336 31.2146168,97.3472953 31.8693265,101.934158 C32.2122396,104.336589 32.2122396,122.445778 32.2122396,126.038009 C32.2122396,131.30013 31.8693265,132.897392 37.866761,132.897392 C42.584947,132.897392 51.3384187,132.893717 52.0136623,132.897392 C52.8942387,132.902185 61.4116819,132.897392 66.3471425,132.897392 C71.8556132,132.897392 71.8556132,130.828451 71.8556132,126.038009 C71.8556132,122.250808 71.8556132,106.546824 71.8556132,102.521973 C71.8556132,98.3744361 77.8827219,94.5113177 82.7822266,91.063341 Z",
                                        id: "Oval-12",
                                        stroke: "#FFFFFF",
                                        "stroke-width": "2"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("path", {
                                      ref: "lamp_outline3",
                                      attrs: {
                                        d:
                                          "M42.902697,132.796771 C42.902697,133.486646 42.902697,134.754561 42.902697,136.600518 C42.902697,139.369453 44.244685,139.087584 45.992184,139.087584 C47.739683,139.087584 56.5120659,139.087584 58.1042317,139.087584 C59.6963975,139.087584 60.9654369,139.20927 60.9654369,136.600518 C60.9654369,134.86135 60.9654369,133.593434 60.9654369,132.796771",
                                        id: "Path-28",
                                        stroke: "#FFFFFF",
                                        "stroke-width": "2"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("path", {
                                      ref: "lamp_outline4",
                                      attrs: {
                                        d:
                                          "M32.5906459,108.979649 L71.3562509,108.979649",
                                        id: "Path-29",
                                        stroke: "#FFFFFF",
                                        "stroke-width": "2"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("path", {
                                      ref: "lamp_outline5",
                                      attrs: {
                                        d:
                                          "M32.5906459,116.979649 L71.3562509,116.979649",
                                        id: "Path-29",
                                        stroke: "#FFFFFF",
                                        "stroke-width": "2"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("path", {
                                      ref: "lamp_outline6",
                                      attrs: {
                                        d:
                                          "M32.5906459,124.979649 L71.3562509,124.979649",
                                        id: "Path-29",
                                        stroke: "#FFFFFF",
                                        "stroke-width": "2"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("path", {
                                      ref: "lamp_shadow",
                                      attrs: {
                                        d:
                                          "M88.0414018,14.1811299 C65.4562288,16.4551791 53.5497645,28.9943182 52.322009,51.798547",
                                        id: "Path-30",
                                        stroke: "#1F3947",
                                        "stroke-width": "2",
                                        transform:
                                          "translate(70.181705, 32.989838) scale(-1, 1) translate(-70.181705, -32.989838) "
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e21b33a", module.exports)
  }
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(38)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Comp10.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f4a5b65", Component.options)
  } else {
    hotAPI.reload("data-v-1f4a5b65", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "win-height" }, [
      _c("div", { staticClass: "inner-content" }, [
        _c("div", { staticClass: "text-wrap" }, [
          _c("strong", { staticClass: "text" }, [
            _vm._v("and build products for them")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "img" }, [
          _c("img", {
            attrs: { src: "/resources/assets/images/illustration09.svg" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1f4a5b65", module.exports)
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(40)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Comp11.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f5872e6", Component.options)
  } else {
    hotAPI.reload("data-v-1f5872e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "win-height" }, [
      _c("div", { staticClass: "inner-content" }, [
        _c("div", { staticClass: "text-wrap" }, [
          _c("strong", { staticClass: "text" }, [
            _vm._v("in sync with your team")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "img" }, [
          _c("img", {
            attrs: { src: "/resources/assets/images/illustration10.svg" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1f5872e6", module.exports)
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(42)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Comp12.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f668a67", Component.options)
  } else {
    hotAPI.reload("data-v-1f668a67", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "win-height" }, [
      _c("div", { staticClass: "inner-content" }, [
        _c("div", { staticClass: "text-wrap" }, [
          _c("strong", { staticClass: "text" }, [
            _vm._v("That's what we do. Here's why.")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1f668a67", module.exports)
  }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(44)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Comp13.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f74a1e8", Component.options)
  } else {
    hotAPI.reload("data-v-1f74a1e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "win-height" }, [
      _c("div", { staticClass: "inner-content" }, [
        _c("div", { staticClass: "text-wrap" }, [
          _c("strong", { staticClass: "text" }, [
            _vm._v("Too often the product you imagine "),
            _c("br"),
            _vm._v("is not the product that is produced.")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "img" }, [
          _c("img", {
            attrs: { src: "/resources/assets/images/illustration11.svg" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1f74a1e8", module.exports)
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(46)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Comp14.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f82b969", Component.options)
  } else {
    hotAPI.reload("data-v-1f82b969", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "win-height" }, [
      _c("div", { staticClass: "inner-content" }, [
        _c("div", { staticClass: "text-wrap" }, [
          _c("strong", { staticClass: "text" }, [
            _vm._v("We turn ideas into reality")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "img" }, [
          _c("img", {
            attrs: { src: "/resources/assets/images/illustration12.svg" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1f82b969", module.exports)
  }
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(48)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Comp15.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f90d0ea", Component.options)
  } else {
    hotAPI.reload("data-v-1f90d0ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "win-height" }, [
      _c("div", { staticClass: "inner-content" }, [
        _c("div", { staticClass: "text-wrap" }, [
          _c("strong", { staticClass: "text" }, [
            _vm._v("We bring teams together to "),
            _c("br"),
            _vm._v("achieve their product vision")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1f90d0ea", module.exports)
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(50)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Comp16.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f9ee86b", Component.options)
  } else {
    hotAPI.reload("data-v-1f9ee86b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "win-height" }, [
      _c("div", { staticClass: "inner-content" }, [
        _c("div", { staticClass: "text-wrap" }, [
          _c("strong", { staticClass: "text" }, [
            _vm._v("Saying Yes When Others Say It's too hard.")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1f9ee86b", module.exports)
  }
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(52)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Comp17.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1facffec", Component.options)
  } else {
    hotAPI.reload("data-v-1facffec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "win-height" }, [
      _c("div", { staticClass: "inner-content" }, [
        _c("div", { staticClass: "text-wrap" }, [
          _c("strong", { staticClass: "text" }, [_vm._v("See What We've Done")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "img is-absolute" }, [
          _c("img", {
            attrs: { src: "/resources/assets/images/illustration13.svg" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1facffec", module.exports)
  }
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "why-section" }, [
    _c(_vm.currentComponent, {
      tag: "div",
      on: {
        mousedown: function($event) {
          _vm.handleScroll($event)
        },
        mouseup: function($event) {
          _vm.handleScroll($event)
        },
        mousemove: function($event) {
          _vm.handleScroll($event)
        }
      },
      nativeOn: {
        mousewheel: function($event) {
          _vm.handleScroll($event)
        },
        click: function($event) {
          _vm.handleScroll($event)
        }
      }
    }),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "close", attrs: { href: "#" } }, [
      _c("i", { staticClass: "icon-cross" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "link-down", attrs: { href: "#" } }, [
      _c("i", { staticClass: "icon-arrow-down" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2e13bc20", module.exports)
  }
}

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e={next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r){$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m={next:function(){if(p<e.length){var u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void 0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
$jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var $jscomp$this=this;
(function(e,r){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"===typeof module&&module.exports?module.exports=r():e.anime=r()})(this,function(){function e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c){for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n in a){var k=a[n];c.call(b,k,n,a)&&f.push(k)}return f}function p(a){return a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a){if(h.arr(a))return a;
h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
a=parseInt(c[1],16);var d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3)}return"rgba("+
255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return a[2]}function V(a){if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
u(W,c))return"transform";if(h.dom(a)&&(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=[],f=[],n=[],k=/(\w+)\((.+?)\)/g;b=k.exec(a);)f.push(b[1]),n.push(b[2]);a=r(n,function(a,b){return f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case "transform":return X(a,c);case "css":return E(a,c);case "attribute":return a.getAttribute(c)}return a[c]||
0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f}return c}function N(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
Math.PI*a.getAttribute("r");case "rect":return 2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case "polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems-1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case "x":return b.x;case "y":return b.y;
case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b}else b=h.hex(b)?T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.length-f.length):b,b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?p(h.arr(a)?a.map(m):m(a)):[];return r(a,
function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||(d.duration=c.duration/b):a={value:a}}return m(a).map(function(a,b){b=b?0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
c)}),1===f.length&&(f=f[0]));d[b]=f}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=(1E3-Math.min(Math.max(b.elasticity,1),999))/
1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var c=J(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})),function(a){return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?b.delay:d.offset+b.delay+
b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=[],e=z(c,d),k;for(k in a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],d)});a=ea(b,f);return z(c,{children:[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}function q(a){function c(){return window.Promise&&new Promise(function(a){return p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c={},d=g.animations,f=d.length;b<f;){var e=d[b],
k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})[0]||l);for(var h=Math.min(Math.max(a-l.start-l.delay,0),l.duration)/l.duration,w=isNaN(h)?1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void 0,m=l.to.numbers.length,t=0;t<m;t++){var x=void 0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&(l.isColor&&2<t||(x=Math.round(x*p)/p));n.push(x)}if(l=h.length)for(m=h[0],w=0;w<l;w++)p=h[w+1],t=n[w],isNaN(t)||(m=p?m+(t+p):m+(t+" "));
else m=n[0];ha[e.type](k.target,e.property,m,c,k.id);e.currentValue=m;b++}if(b=Object.keys(c).length)for(d=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[d].target.style[H]=c[d].join(" ");g.currentTime=a;g.progress=a/g.duration*100}function f(a){if(g[a])g[a](g)}function e(){g.remaining&&!0!==g.remaining&&g.remaining--}function k(a){var k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.children.length){var u=g.children,v=u.length;
if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--;)u[v].seek(q)}if(q>=w||!k)g.began||(g.began=!0,f("begin")),f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&(b(0),x&&e()),q>=k&&r!==k||!k)b(k),x||e();f("update");a>=k&&(g.remaining?(t=h,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,f("complete"),"Promise"in window&&(p(),m=c()))),l=0)}a=void 0===a?{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var a=g.direction,c=g.loop;g.currentTime=
0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.remaining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--;)g.children[a].reset()};g.tick=function(a){h=a;t||(t=h);k((l+h-t)*q.speed)};g.seek=function(a){k(d(a))};g.pause=function(){var a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0};g.play=function(){g.paused&&(g.paused=!1,t=0,l=d(g.currentTime),v.push(g),B||ia())};g.reverse=function(){g.reversed=!g.reversed;t=0;l=d(g.currentTime)};g.restart=function(){g.pause();
g.reset();g.play()};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),H,h={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},
pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f){if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n}k=l}else if(0===
n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2,n=a(m,c,b)-k,0<n?h=m:l=m;while(1e-7<Math.abs(n)&&10>++g);k=m}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e in d)f.type=e,d[f.type].forEach(function(a){return function(d,f){b["ease"+a.type+c[f]]=h.fnc(d)?
d:A.apply($jscomp$this,d)}}(f)),f={type:f.type};return b}(),ha={css:function(a,c,d){return a.style[c]=d},attribute:function(a,c,d){return a.setAttribute(c,d)},object:function(a,c,d){return a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")")}},v=[],B=0,ia=function(){function a(){B=requestAnimationFrame(c)}function c(c){var b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c),d++;a()}else cancelAnimationFrame(B),B=0}return a}();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
function(a){a=P(a);for(var c=v.length;c--;)for(var d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&(b.splice(f,1),b.length||d.pause())};q.getValue=K;q.path=function(a,c){var d=h.str(a)?e(a)[0]:a,b=c||100;return function(a){return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var c=N(a);a.setAttribute("stroke-dasharray",c);return c};q.bezier=A;q.easings=Q;q.timeline=function(a){var c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a){a.began=
!0;a.completed=!0});m(d).forEach(function(b){var d=z(b,D(S,a||{}));d.targets=d.targets||a.targets;b=c.duration;var e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0;d.duration>b&&(c.duration=d.duration);c.children.push(d)});c.seek(0);c.reset();c.autoplay&&c.restart();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(c-a+1))+a};return q});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("2ec6a1e1", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1ecacd46\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Comp3.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1ecacd46\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Comp3.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "\n.square[data-v-1ecacd46] {\n    width: 10px;\n    height: 10px;\n    background: blue;\n}\n.st0[data-v-1ecacd46]{fill:none;stroke:#FFFFFF;stroke-width:2;\n}\n.st1[data-v-1ecacd46]{fill:#FFFFFF;\n}\n.st2[data-v-1ecacd46]{opacity:0.2;fill:#FFFFFF;enable-background:new;\n}\n", ""]);

// exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "win-height" }, [
    _c("div", { staticClass: "inner-content" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "img img-xl" }, [
        _c(
          "svg",
          {
            staticStyle: { "enable-background": "new 246 300 1440 193" },
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              version: "1.1",
              id: "Layer_1",
              x: "0px",
              y: "0px",
              viewBox: "246 300 1440 193",
              "xml:space": "preserve"
            }
          },
          [
            _c("title", [_vm._v("Illustration")]),
            _vm._v(" "),
            _c("desc", [_vm._v("Created with Sketch.")]),
            _vm._v(" "),
            _c("g", { attrs: { id: "Mayven-2.0" } }, [
              _c(
                "g",
                {
                  attrs: {
                    id: "The-Teams-We-Help",
                    transform: "translate(0.000000, -1984.000000)"
                  }
                },
                [
                  _c(
                    "g",
                    {
                      attrs: {
                        id: "_x33_",
                        transform: "translate(-16.000000, 1528.000000)"
                      }
                    },
                    [
                      _c(
                        "g",
                        {
                          attrs: {
                            id: "Content",
                            transform: "translate(0.000000, 195.000000)"
                          }
                        },
                        [
                          _c(
                            "g",
                            {
                              attrs: {
                                id: "Illustration",
                                transform: "translate(0.000000, 262.000000)"
                              }
                            },
                            [
                              _c(
                                "g",
                                {
                                  attrs: {
                                    transform: "translate(129.000000, 0.000000)"
                                  }
                                },
                                [
                                  _c(
                                    "g",
                                    {
                                      attrs: {
                                        id: "Man",
                                        transform:
                                          "translate(168.000000, 79.000000)"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-90",
                                          d:
                                            "M247,351.7v-7.8c0.2-4,1.9-6.5,5.2-7.5c3.3-0.9,6.8-1.8,10.5-2.5"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polygon", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-92",
                                          points:
                                            "276.9,331.3 279.7,335.3 275.7,339.1 264.5,331.5 261.6,335.3 266.3,339.1                 "
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-91",
                                          d:
                                            "M294,351.4v-8.6c-0.1-2.6-1.5-4.6-4.2-6s-6.2-2.3-10.6-2.5"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polyline", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-93",
                                          points:
                                            "267,339.5 268.6,343.3 265.1,352.2        "
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polyline", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-94",
                                          points:
                                            "274.9,338.9 273,343.3 274.9,351.2        "
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-95",
                                          d:
                                            "M264.9,331.3v-2.9c-2.9-1.4-4.4-4.1-4.4-8"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-96",
                                          d:
                                            "M276.8,331.1v-2.8c2.7-1.1,4.1-3.8,4.1-8"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-97",
                                          d:
                                            "M259.6,316.7c-0.7-4-0.9-6.6-0.6-7.8c0.4-1.8,1.8-8.2,11.7-8.2s11.2,5.4,11.6,8.2         c0.3,1.9,0.3,4.5,0,7.8"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-98",
                                          d: "M264.1,307.8c2.4,4.9,7.1,7.6,14,8"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-99",
                                          d:
                                            "M259.5,315.7c-2.2,0.2-3.1,1.3-2.8,3.3c0.3,2,1.3,2.8,3.1,2.4"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-100",
                                          d:
                                            "M282,315.6c1.9,0.3,2.9,1.4,2.8,3.1c-0.1,1.7-1.2,2.6-3.2,2.6"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      attrs: {
                                        id: "Man_1_",
                                        transform:
                                          "translate(509.000000, 139.000000)"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-90_1_",
                                          d:
                                            "M247,351.7v-7.8c0.2-4,1.9-6.5,5.2-7.5c3.3-0.9,6.8-1.8,10.5-2.5"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polygon", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-92_1_",
                                          points:
                                            "276.9,331.3 279.7,335.3 275.7,339.1 264.5,331.5 261.6,335.3 266.3,339.1                 "
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-91_1_",
                                          d:
                                            "M294,351.4v-8.6c-0.1-2.6-1.5-4.6-4.2-6s-6.2-2.3-10.6-2.5"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polyline", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-93_1_",
                                          points:
                                            "267,339.5 268.6,343.3 265.1,352.2        "
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polyline", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-94_1_",
                                          points:
                                            "274.9,338.9 273,343.3 274.9,351.2        "
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-95_1_",
                                          d:
                                            "M264.9,331.3v-2.9c-2.9-1.4-4.4-4.1-4.4-8"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-96_1_",
                                          d:
                                            "M276.8,331.1v-2.8c2.7-1.1,4.1-3.8,4.1-8"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-97_1_",
                                          d:
                                            "M259.6,316.7c-0.7-4-0.9-6.6-0.6-7.8c0.4-1.8,1.8-8.2,11.7-8.2s11.2,5.4,11.6,8.2         c0.3,1.9,0.3,4.5,0,7.8"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-98_1_",
                                          d: "M264.1,307.8c2.4,4.9,7.1,7.6,14,8"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-99_1_",
                                          d:
                                            "M259.5,315.7c-2.2,0.2-3.1,1.3-2.8,3.3c0.3,2,1.3,2.8,3.1,2.4"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-100_1_",
                                          d:
                                            "M282,315.6c1.9,0.3,2.9,1.4,2.8,3.1c-0.1,1.7-1.2,2.6-3.2,2.6"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      attrs: {
                                        id: "Man_2_",
                                        transform:
                                          "translate(840.000000, 79.000000)"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-90_2_",
                                          d:
                                            "M247,351.7v-7.8c0.2-4,1.9-6.5,5.2-7.5c3.3-0.9,6.8-1.8,10.5-2.5"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polygon", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-92_2_",
                                          points:
                                            "276.9,331.3 279.7,335.3 275.7,339.1 264.5,331.5 261.6,335.3 266.3,339.1                 "
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-91_2_",
                                          d:
                                            "M294,351.4v-8.6c-0.1-2.6-1.5-4.6-4.2-6s-6.2-2.3-10.6-2.5"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polyline", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-93_2_",
                                          points:
                                            "267,339.5 268.6,343.3 265.1,352.2        "
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polyline", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-94_2_",
                                          points:
                                            "274.9,338.9 273,343.3 274.9,351.2        "
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-95_2_",
                                          d:
                                            "M264.9,331.3v-2.9c-2.9-1.4-4.4-4.1-4.4-8"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-96_2_",
                                          d:
                                            "M276.8,331.1v-2.8c2.7-1.1,4.1-3.8,4.1-8"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-97_2_",
                                          d:
                                            "M259.6,316.7c-0.7-4-0.9-6.6-0.6-7.8c0.4-1.8,1.8-8.2,11.7-8.2s11.2,5.4,11.6,8.2         c0.3,1.9,0.3,4.5,0,7.8"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-98_2_",
                                          d: "M264.1,307.8c2.4,4.9,7.1,7.6,14,8"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-99_2_",
                                          d:
                                            "M259.5,315.7c-2.2,0.2-3.1,1.3-2.8,3.3c0.3,2,1.3,2.8,3.1,2.4"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-100_2_",
                                          d:
                                            "M282,315.6c1.9,0.3,2.9,1.4,2.8,3.1c-0.1,1.7-1.2,2.6-3.2,2.6"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      ref: "woman",
                                      attrs: {
                                        id: "Woman",
                                        transform:
                                          "translate(0.000000, 9.000000)"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-83",
                                          d: "M256.1,346.9v6"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-83_1_",
                                          d: "M282.1,346.9v6"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polyline", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-84",
                                          points:
                                            "259.6,337.2 256,342.1 261.9,343.3 268.6,352.1 275.8,343.3 281.2,342.1          278,337.2        "
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polyline", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-85",
                                          points:
                                            "262.6,326.9 262.6,334.1 268.6,350.8 275,334.1 275,326.9        "
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-86",
                                          d:
                                            "M260.2,330l-6.4-4.1l1.1-9.4c0-2.7,0-5.1,0-7.4c0-3.3,3.8-8.9,14.2-8.9         c10.4,0,12.7,6.2,13.5,9.3c0.5,2,0.5,4.3,0,6.7l1.2,9.8l-6,4.1"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-87",
                                          d:
                                            "M264.9,308.3c1.6,3.9,6.1,7.3,13.4,10.2"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-88",
                                          d: "M268,312.7c-2,2.9-5,4.9-9,5.9"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-89",
                                          d:
                                            "M259.6,317.5c0.9,8.3,4,12.4,9.3,12.4c5.3,0,8.2-4.1,8.9-12.4"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-101",
                                          d:
                                            "M275.7,333.2c5.6,0.2,9.6,1.7,11.9,4.4c2.3,2.8,3.4,6.9,3.4,12.4"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-81",
                                          d:
                                            "M262,333.2c-10,0.3-15.1,5.8-15.1,16.4"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      attrs: {
                                        id: "Woman_1_",
                                        transform:
                                          "translate(369.000000, 30.000000)"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-83_2_",
                                          d: "M256.1,346.9v6"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-83_3_",
                                          d: "M282.1,346.9v6"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polyline", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-84_1_",
                                          points:
                                            "259.6,337.2 256,342.1 261.9,343.3 268.6,352.1 275.8,343.3 281.2,342.1          278,337.2        "
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polyline", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-85_1_",
                                          points:
                                            "262.6,326.9 262.6,334.1 268.6,350.8 275,334.1 275,326.9        "
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-86_1_",
                                          d:
                                            "M260.2,330l-6.4-4.1l1.1-9.4c0-2.7,0-5.1,0-7.4c0-3.3,3.8-8.9,14.2-8.9         c10.4,0,12.7,6.2,13.5,9.3c0.5,2,0.5,4.3,0,6.7l1.2,9.8l-6,4.1"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-87_1_",
                                          d:
                                            "M264.9,308.3c1.6,3.9,6.1,7.3,13.4,10.2"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-88_1_",
                                          d: "M268,312.7c-2,2.9-5,4.9-9,5.9"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-89_1_",
                                          d:
                                            "M259.6,317.5c0.9,8.3,4,12.4,9.3,12.4c5.3,0,8.2-4.1,8.9-12.4"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-101_1_",
                                          d:
                                            "M275.7,333.2c5.6,0.2,9.6,1.7,11.9,4.4c2.3,2.8,3.4,6.9,3.4,12.4"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-81_1_",
                                          d:
                                            "M262,333.2c-10,0.3-15.1,5.8-15.1,16.4"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "g",
                                    {
                                      attrs: {
                                        id: "Woman_2_",
                                        transform:
                                          "translate(651.000000, 0.000000)"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-83_4_",
                                          d: "M256.1,346.9v6"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-83_5_",
                                          d: "M282.1,346.9v6"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polyline", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-84_2_",
                                          points:
                                            "259.6,337.2 256,342.1 261.9,343.3 268.6,352.1 275.8,343.3 281.2,342.1          278,337.2        "
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("polyline", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-85_2_",
                                          points:
                                            "262.6,326.9 262.6,334.1 268.6,350.8 275,334.1 275,326.9        "
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-86_2_",
                                          d:
                                            "M260.2,330l-6.4-4.1l1.1-9.4c0-2.7,0-5.1,0-7.4c0-3.3,3.8-8.9,14.2-8.9         c10.4,0,12.7,6.2,13.5,9.3c0.5,2,0.5,4.3,0,6.7l1.2,9.8l-6,4.1"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-87_2_",
                                          d:
                                            "M264.9,308.3c1.6,3.9,6.1,7.3,13.4,10.2"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-88_2_",
                                          d: "M268,312.7c-2,2.9-5,4.9-9,5.9"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-89_2_",
                                          d:
                                            "M259.6,317.5c0.9,8.3,4,12.4,9.3,12.4c5.3,0,8.2-4.1,8.9-12.4"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-101_2_",
                                          d:
                                            "M275.7,333.2c5.6,0.2,9.6,1.7,11.9,4.4c2.3,2.8,3.4,6.9,3.4,12.4"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("path", {
                                        staticClass: "st0",
                                        attrs: {
                                          id: "Path-81_2_",
                                          d:
                                            "M262,333.2c-10,0.3-15.1,5.8-15.1,16.4"
                                        }
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "g",
                                {
                                  attrs: {
                                    id: "Lines",
                                    transform: "translate(0.000000, 48.000000)"
                                  }
                                },
                                [
                                  _c("rect", {
                                    staticClass: "st1",
                                    attrs: {
                                      id: "Rectangle-68",
                                      x: "246",
                                      y: "310",
                                      width: "131",
                                      height: "2"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    staticClass: "st1",
                                    attrs: {
                                      id: "Rectangle-68_1_",
                                      x: "466",
                                      y: "381",
                                      width: "79",
                                      height: "2"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    staticClass: "st1",
                                    attrs: {
                                      id: "Rectangle-68-Copy",
                                      x: "590",
                                      y: "381",
                                      width: "109",
                                      height: "2"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    staticClass: "st1",
                                    attrs: {
                                      id: "Rectangle-68-Copy_1_",
                                      x: "931",
                                      y: "441",
                                      width: "49",
                                      height: "2"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    staticClass: "st1",
                                    attrs: {
                                      id: "Rectangle-69",
                                      x: "465",
                                      y: "310",
                                      width: "2",
                                      height: "73"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    staticClass: "st1",
                                    attrs: {
                                      id: "Rectangle-69_1_",
                                      x: "699",
                                      y: "330",
                                      width: "2",
                                      height: "53"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    staticClass: "st1",
                                    attrs: {
                                      id: "Rectangle-69_2_",
                                      x: "980",
                                      y: "300",
                                      width: "2",
                                      height: "143"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    staticClass: "st1",
                                    attrs: {
                                      id: "Rectangle-69_3_",
                                      x: "1119",
                                      y: "300",
                                      width: "2",
                                      height: "83"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    staticClass: "st1",
                                    attrs: {
                                      id: "Rectangle-69_4_",
                                      x: "839",
                                      y: "330",
                                      width: "2",
                                      height: "113"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    staticClass: "st1",
                                    attrs: {
                                      id: "Rectangle-68_2_",
                                      x: "419",
                                      y: "310",
                                      width: "47",
                                      height: "2"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    staticClass: "st1",
                                    attrs: {
                                      id: "Rectangle-68_3_",
                                      x: "699",
                                      y: "330",
                                      width: "47",
                                      height: "2"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    staticClass: "st1",
                                    attrs: {
                                      id: "Rectangle-68_4_",
                                      x: "839",
                                      y: "441",
                                      width: "47",
                                      height: "2"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    staticClass: "st1",
                                    attrs: {
                                      id: "Rectangle-68_5_",
                                      x: "788",
                                      y: "330",
                                      width: "53",
                                      height: "2"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    staticClass: "st1",
                                    attrs: {
                                      id: "Rectangle-68_6_",
                                      x: "981",
                                      y: "300",
                                      width: "47",
                                      height: "2"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    staticClass: "st1",
                                    attrs: {
                                      id: "Rectangle-68_7_",
                                      x: "1072",
                                      y: "300",
                                      width: "47",
                                      height: "2"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    staticClass: "st1",
                                    attrs: {
                                      id: "Rectangle-68_8_",
                                      x: "1120",
                                      y: "381",
                                      width: "97",
                                      height: "2"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    staticClass: "st1",
                                    attrs: {
                                      id: "Rectangle-68_9_",
                                      x: "1262",
                                      y: "381",
                                      width: "53",
                                      height: "2"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    staticClass: "st2",
                                    attrs: {
                                      id: "Rectangle-68_10_",
                                      x: "1312",
                                      y: "381",
                                      width: "53",
                                      height: "2"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-wrap" }, [
      _c("strong", { staticClass: "text" }, [
        _vm._v("are as varied "),
        _c("br"),
        _vm._v("as the people in them")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1ecacd46", module.exports)
  }
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_animejs__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            persons: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.persons = [this.$refs.Person1, this.$refs.Person2, this.$refs.Person3, this.$refs.Person4, this.$refs.Person5, this.$refs.Person6, this.$refs.Person7, this.$refs.Person8, this.$refs.Person9, this.$refs.Person10, this.$refs.Person11, this.$refs.Person12, this.$refs.Person13, this.$refs.Person14, this.$refs.Person15, this.$refs.Person16, this.$refs.Person17, this.$refs.Person18, this.$refs.Person19, this.$refs.Person20, this.$refs.Person21, this.$refs.Person22, this.$refs.Person23, this.$refs.Person24, this.$refs.Person25, this.$refs.Person26, this.$refs.Person27, this.$refs.Person28, this.$refs.Person29, this.$refs.Person30, this.$refs.Person31, this.$refs.Person32, this.$refs.Person33, this.$refs.Person34, this.$refs.Person35, this.$refs.Person36];

        var update = function update() {
            var i = Math.abs(Math.floor(Math.random() * _this.persons.length - 1));
            _this.highLightPerson(i);
            setTimeout(function () {
                update();
            }, 500);
        };

        update();
    },

    methods: {
        highLightPerson: function highLightPerson(index) {
            __WEBPACK_IMPORTED_MODULE_0_animejs___default.a.timeline().add({
                targets: this.persons[index],
                opacity: 1,
                duration: 500,
                easing: 'easeInOutSine'
            }).add({
                targets: this.persons[index],
                opacity: 0,
                duration: 500,
                easing: 'easeInOutSine'
            });
        }
    }
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_animejs__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            backgroundEl: null,
            titleEl: null,
            lampEl: null,
            lampOutlineEls: [],
            lampShadowEl: null,
            circleEls: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.backgroundEl = this.$refs.cover;
        this.titleEl = this.$refs.title;
        this.lampEl = this.$refs.lamp;
        this.lampOutlineEls = [this.$refs.lamp_outline2, this.$refs.lamp_outline3, this.$refs.lamp_outline4, this.$refs.lamp_outline5, this.$refs.lamp_outline6];
        this.circleEls = [this.$refs.circle1, this.$refs.circle2];
        this.lampShadowEl = this.$refs.lamp_shadow;

        var update = function update() {
            _this.highLight();
            setTimeout(function () {
                update();
            }, 2000);
        };

        update();
    },

    methods: {
        highLight: function highLight() {
            console.log('>> highlight');
            __WEBPACK_IMPORTED_MODULE_0_animejs___default.a.timeline().add({
                targets: this.backgroundEl,
                background: '#1f3947',
                duration: 1000,
                easing: 'easeInOutSine'
            }).add({
                targets: this.backgroundEl,
                background: '#FFFFFF',
                duration: 1000,
                easing: 'easeInOutSine'
            }).add({
                offset: 0,
                targets: this.titleEl,
                color: '#FFFFFF',
                duration: 1000,
                easing: 'easeInOutSine'
            }).add({
                offset: 1000,
                targets: this.titleEl,
                color: '#1f3947',
                duration: 1000,
                easing: 'easeInOutSine'
            }).add({
                offset: 0,
                targets: this.lampEl,
                fill: '#FFFFFF',
                duration: 1000,
                easing: 'easeInOutSine'
            }).add({
                offset: 1000,
                targets: this.lampEl,
                fill: '#1f3947',
                duration: 1000,
                easing: 'easeInOutSine'
            }).add({
                offset: 0,
                targets: this.circleEls,
                stroke: '#FFFFFF',
                duration: 1000,
                easing: 'easeInOutSine'
            }).add({
                offset: 1000,
                targets: this.circleEls,
                stroke: '#1f3947',
                duration: 1000,
                easing: 'easeInOutSine'
            }).add({
                offset: 0,
                targets: this.lampOutlineEls,
                stroke: '#FFFFFF',
                duration: 1000,
                easing: 'easeInOutSine'
            }).add({
                offset: 1000,
                targets: this.lampOutlineEls,
                stroke: '#1f3947',
                duration: 1000,
                easing: 'easeInOutSine'
            }).add({
                offset: '-=2000',
                targets: this.lampShadowEl,
                stroke: '#1f3947',
                duration: 1000,
                easing: 'easeInOutSine'
            }).add({
                offset: '-=2000',
                targets: this.lampShadowEl,
                stroke: '#FFFFFF',
                duration: 1000,
                easing: 'easeInOutSine'
            });
        }
    }
});

/***/ })
],[3]);