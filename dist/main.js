/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Merriweather-Regular.ttf */ \"./src/assets/Merriweather-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    width: 100%;\n    height: 100vh;\n    background-color: #FFE8C5;\n    font-family: 'Custom', sans-serif;\n}\n\n@font-face {\n    font-family: 'Custom';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2');\n}\n\n/*\npalette\nhttps://colorhunt.co/palette/ff0000ffa27fffe8c597be5a\n*/\n\n/* main */\n\n.main-content {\n    display: flex;\n    flex-direction: row;\n    height: 80%;\n    align-items: center;\n    justify-content: center;\n    gap: 50px;\n}\n\nh1 {\n    text-align: center;    \n    padding: 10px;\n    margin-bottom: 20px;\n    font-weight: 600;\n    font-size: 5em;\n    color: #97BE5A;\n    text-shadow: 1px 1px 2px #000000;\n}\n\n/* forms */\n\ndialog {\n    top: 30%;\n    left: 40%;\n    width: 400px;\n    height: 400px;\n    background-color: #FFE8C5;\n    border: 4mm ridge rgba(255, 161, 127, 0.452);\n}\n\nform {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-rows: 1fr 0.3fr 0.3fr 1fr;\n    align-items: center;\n    justify-content: center;\n}\n\nbutton {\n    border: none;\n    padding: 15px 32px;\n    background-color: #97BE5A;\n    font-family: 'Custom', sans-serif;\n    font-weight: bold;\n    transition: 0.3s ease-in-out;\n}\n\nbutton:hover {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n    transition: 0.3s ease-in-out;\n}\n\n#welcome-text {\n    text-align: center;\n    font-size: 1.5em;\n    color: #97BE5A;\n    text-shadow: 1px 1px 2px #000000;\n}\n\ninput {\n    background-color: rgba(255, 161, 127, 0.452);\n}\n\n::placeholder {\n    color: black;\n}\n\n#end-form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n/* boards */\n\n.row > div {\n    border: 3px solid black;\n    width: 50px;\n    height: 50px;\n}\n\n#board-container {\n    display: flex;\n    flex-direction: row;\n}\n\n.player-1, .player-2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nimg {\n    width: 150px;\n    height: 150px;\n    margin-bottom: 20px;\n}\n\n#vertical, #horizontal {\n    margin-top: 10px;\n}\n\n/* cells */\n\n.unvisited.ship {\n    background-color: #97BE5A;\n}\n\n.visited.ship {\n    background-color: #FF0000;\n}\n\n.visited {\n    background-color: #FFA27F;\n}\n\n.unvisited {\n    background-color: #d6c3a5;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_states_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/states.js */ \"./src/js/states.js\");\n/* harmony import */ var _js_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/classes.js */ \"./src/js/classes.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const playerOneGameBoard = new _js_classes_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard()\n    const playerTwoGameBoard = new _js_classes_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard()\n\n    const playerOne = new _js_classes_js__WEBPACK_IMPORTED_MODULE_1__.Player('Ajax', 'human', playerOneGameBoard)\n    const playerTwo = new _js_classes_js__WEBPACK_IMPORTED_MODULE_1__.Player('Bot', 'computer', playerTwoGameBoard)\n\n    //gameStartForm()\n\n    ;(0,_js_states_js__WEBPACK_IMPORTED_MODULE_0__.gameStartShips)(playerOne, playerTwo)\n});\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/js/classes.js":
/*!***************************!*\
  !*** ./src/js/classes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    constructor(shipLength, position=[], direction='vertical') {\n        this.shipLength = shipLength\n        this.hits = 0\n        this.sunk = false\n        this.position = position\n        this.direction = direction\n    }\n\n    hit() {\n        this.hits++;\n        return this.hits;\n    }\n\n    isSunk() {\n        if (this.hits === this.shipLength) {\n            this.sunk = true;\n        }\n        return this.sunk;\n    }\n}\n\nclass Gameboard {\n    constructor() {\n        this.current = Array.from({ length: 10 }, () => Array(10).fill(0));\n        this.ships = []\n        this.shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]\n        this.visited = 0\n        this.hits = 0\n    }\n\n    coordinate(ship) {\n        if (!this.validation(ship)) {\n            throw new Error(\"you almost broke the game -_- try again!!!\");\n            //add some kind of animation\n        }\n\n        if (ship.direction === 'horizontal') {\n            for (let i = 0; i < ship.shipLength; i++) {\n                this.current[ship.position[0]][ship.position[1]+i] = 1;\n                ship.position.push([ship.position[0], ship.position[1] + i]);\n            }\n        } else {\n            for (let i = 0; i < ship.shipLength; i++) {\n                this.current[ship.position[0]+i][ship.position[1]] = 1;\n                ship.position.push([ship.position[0] + i, ship.position[1]]);\n            }\n        }\n\n        ship.position.splice(0,2)\n        this.ships.push(ship)\n    }\n    \n    receiveAttack(positionHit) {\n        let found = false\n\n        this.ships.forEach(ship => {\n            ship.position.forEach(pos => {\n                if (!found && pos[0] === positionHit[0] && pos[1] === positionHit[1]) {\n                    ship.hit();\n                    this.hits++;\n                    this.visited++;\n                    this.current[positionHit[0]][positionHit[1]] = 3;\n                    found = true;\n                }\n            });\n        });\n        \n        if (!found) {\n            this.current[positionHit[0]][positionHit[1]] = 2;\n            this.visited++;\n        }\n    }\n\n    isEndGame() {\n        return this.visited === 100 || this.hits === 20;\n    }\n\n    render(isHidden=false) {\n        const boardDiv = document.createElement(\"div\");\n        boardDiv.id = \"board-container\"\n\n        this.current.forEach((row, indexRow) => {\n            const rowDiv = document.createElement(\"div\");\n            rowDiv.className = \"row\";\n    \n            row.forEach((cell, indexCol) => {\n                const boardCell = document.createElement(\"div\");\n                boardCell.id = `[${indexRow}, ${indexCol}]`;\n    \n                if (cell === 0) {\n                    boardCell.className = \"unvisited\";\n                } else if (cell === 1 && isHidden) {\n                    boardCell.className = \"unvisited\";\n                } else if (cell === 1) {\n                    boardCell.className = \"unvisited ship\";\n                } else if (cell === 2) {\n                    boardCell.className = \"visited\";\n                } else {\n                    boardCell.className = \"visited ship\";\n                }\n    \n                rowDiv.appendChild(boardCell);\n            });\n    \n            boardDiv.appendChild(rowDiv);\n        });\n    \n        return boardDiv;\n    }\n\n    validation(ship) {\n        const [row, col] = ship.position;\n        const shipLength = ship.shipLength;\n        const direction = ship.direction;\n\n        const bounds = () => {\n            if (direction === 'horizontal') {\n                return col + shipLength > 10;\n            } else {\n                return row + shipLength > 10;\n            }\n        };\n\n        const collision = () => {\n            const deltas = [-1, 0, 1];\n\n            for (let i = 0; i < shipLength; i++) {\n                const currentRow = direction === 'horizontal' ? row : row+i;\n                const currentCol = direction === 'horizontal' ? col+i : col;\n\n                for (let dRow of deltas) {\n                    for (let dCol of deltas) {\n                        const newRow = currentRow + dRow;\n                        const newCol = currentCol + dCol;\n                        if (\n                            newRow >= 0 && newRow < 10 &&\n                            newCol >= 0 && newCol < 10 &&\n                            this.current[newRow][newCol] === 1\n                        ) {\n                            return true;\n                        }\n                    }\n                }\n            }\n\n            return false;\n        }\n\n        if (bounds() || collision()) {\n            return false;\n        }\n\n        return true;\n    }\n\n    randomize() {\n        this.shipSizes.forEach(size => {\n            let placed = false;\n\n            while (!placed) {\n                const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';\n                const row = Math.floor(Math.random() * 10);\n                const col = Math.floor(Math.random() * 10);\n\n                const newShip = new Ship(size, [row, col], direction);\n\n                if (this.validation(newShip)) {\n                    this.coordinate(newShip);\n                    placed = true;\n                }\n            }\n        });\n    }\n}\n\nclass Player {\n    constructor(name, type='human', gameboard) {\n        this.name = name\n        this.type = type\n        this.gameboard = gameboard\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/js/classes.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   endForm: () => (/* binding */ endForm),\n/* harmony export */   placeShips: () => (/* binding */ placeShips),\n/* harmony export */   startForm: () => (/* binding */ startForm)\n/* harmony export */ });\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ \"./src/js/classes.js\");\n/* harmony import */ var _states_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states.js */ \"./src/js/states.js\");\n/* harmony import */ var _assets_robotIcon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/robotIcon.png */ \"./src/assets/robotIcon.png\");\n\n\n\n\nfunction startForm() {\n    const body = document.querySelector('body');\n\n    const dialog = document.createElement(\"dialog\");\n    dialog.id = \"start-dialog\";\n\n    const form = document.createElement(\"form\");\n    form.id = \"start-form\";\n\n    const welcomeText = document.createElement(\"div\");\n    welcomeText.textContent = \"Welcome to Battleship!\";\n    welcomeText.id = \"welcome-text\";\n    form.appendChild(welcomeText);\n\n    const playerNameLabel = document.createElement(\"label\");\n    playerNameLabel.textContent = \"Enter your name:\";\n    playerNameLabel.setAttribute('for', 'player-name-input');\n    form.appendChild(playerNameLabel);\n    const playerName = document.createElement(\"input\");\n    playerName.type = \"text\";\n    playerName.id = \"player-name-input\";\n    playerName.required = true;\n    playerName.placeholder = \"Name\";\n    form.appendChild(playerName);\n\n    const submitButton = document.createElement(\"button\");\n    submitButton.id = 'submit-button';\n    submitButton.type = \"submit\";\n    submitButton.textContent = \"New game\";\n    form.appendChild(submitButton);\n\n    dialog.appendChild(form)\n    body.appendChild(dialog)\n\n    dialog.showModal();\n\n    return dialog;\n}\n\nfunction endForm(winner) {\n    const body = document.querySelector('body');\n\n    const dialog = document.createElement(\"dialog\");\n    dialog.id = \"end-dialog\";\n\n    const form = document.createElement(\"form\");\n    form.id = \"end-form\";\n\n    const results = document.createElement(\"div\");\n    results.textContent = `${winner} is the winner!!!`;\n    form.appendChild(results);\n\n    const resetButton = document.createElement(\"button\");\n    resetButton.id = 'reset-button';\n    resetButton.type = \"submit\";\n    resetButton.textContent = \"Play again\";\n    form.appendChild(resetButton);\n\n    dialog.appendChild(form)\n    body.appendChild(dialog)\n\n    dialog.showModal();\n\n    return dialog;\n}\n\nfunction placeShips(player, container, bot) {\n    let shipSizesIndex = 0;\n    let direction = 'vertical';\n\n    const directionButton = document.createElement(\"button\")\n    directionButton.id = direction;\n    directionButton.textContent = `rotate (to ${direction})`;\n    container.appendChild(directionButton)\n\n    directionButton.addEventListener('click', function () {\n        if (directionButton.id === 'vertical') {\n            directionButton.id = 'horizontal';\n            direction = 'horizontal';\n        } else if (directionButton.id === 'horizontal') {\n            directionButton.id = 'vertical';\n            direction = 'vertical';\n        }\n        directionButton.textContent = `rotate (to ${direction})`;\n    });\n\n\n    function eventListeners() {\n        if (shipSizesIndex === player.gameboard.shipSizes.length) {\n            directionButton.remove();\n            renderBot(bot)\n            ;(0,_states_js__WEBPACK_IMPORTED_MODULE_1__.gameCurrent)(player, bot)\n        }\n\n        const boardDiv = container.querySelector(\"#board-container\");\n        const rowDivs = boardDiv.querySelectorAll(\".row\");\n\n        rowDivs.forEach(rowDiv => {\n            const cells = rowDiv.querySelectorAll(\"div\");\n            cells.forEach(cell => {\n                cell.addEventListener('click', function () {\n                    const newShip = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Ship(player.gameboard.shipSizes[shipSizesIndex], JSON.parse(cell.id), direction)\n                    player.gameboard.coordinate(newShip)\n                    shipSizesIndex++;\n                    container.replaceChild(player.gameboard.render(), boardDiv);\n                    eventListeners()\n                });\n            });\n        });\n    }\n    eventListeners()\n}\n\nfunction renderBot(bot) {\n    const botContainer = document.querySelector('.player-2');\n    const robotIconImg = document.createElement(\"img\");\n    robotIconImg.className = 'robot-icon';\n    robotIconImg.src = _assets_robotIcon_png__WEBPACK_IMPORTED_MODULE_2__;\n    botContainer.appendChild(robotIconImg)\n\n    bot.gameboard.randomize()\n    botContainer.appendChild(bot.gameboard.render(true))\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/dom.js?");

/***/ }),

/***/ "./src/js/states.js":
/*!**************************!*\
  !*** ./src/js/states.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameCurrent: () => (/* binding */ gameCurrent),\n/* harmony export */   gameOver: () => (/* binding */ gameOver),\n/* harmony export */   gameStartForm: () => (/* binding */ gameStartForm),\n/* harmony export */   gameStartShips: () => (/* binding */ gameStartShips)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/js/dom.js\");\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ \"./src/js/classes.js\");\n/* harmony import */ var _assets_userIcon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/userIcon.png */ \"./src/assets/userIcon.png\");\n\n\n\n\nfunction gameStartForm() {\n    const form = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.startForm)()\n\n    form.addEventListener(\"submit\", function(event) {\n        event.preventDefault();\n        const playerOneName = document.getElementById(\"player-name-input\").value;\n\n        form.close();\n        form.remove();\n\n        const playerOneGameBoard = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard()\n        const playerTwoGameBoard = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard()\n\n        const playerOne = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Player(playerOneName, 'human', playerOneGameBoard)\n        const playerTwo = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Player('Bot', 'computer', playerTwoGameBoard)\n\n        gameStartShips(playerOne, playerTwo)\n    });\n}\n\nfunction gameStartShips(player, bot) {\n    const playerContainer = document.querySelector('.player-1');\n    const userIconImg = document.createElement(\"img\");\n    userIconImg.className = 'user-icon';\n    userIconImg.src = _assets_userIcon_png__WEBPACK_IMPORTED_MODULE_2__;\n    playerContainer.appendChild(userIconImg)\n    playerContainer.appendChild(player.gameboard.render())\n    ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.placeShips)(player, playerContainer, bot)\n}\n\nfunction gameCurrent(player, bot) {\n    const botBoardDiv = document.querySelector(\".player-2 #board-container\");\n    const playerBoardDiv = document.querySelector(\".player-1 #board-container\");\n    const playerContainer = document.querySelector('.player-1');\n    const botContainer = document.querySelector('.player-2');\n\n    const positions = allPositions();\n    const shuffled = shuffle(positions);\n\n    const rowDivs = botBoardDiv.querySelectorAll(\".row\");\n\n    rowDivs.forEach(rowDiv => {\n        const cells = rowDiv.querySelectorAll(\"div\");\n        cells.forEach(cell => {\n            if (cell.className !== 'visited' && cell.className !== 'visited ship') {\n                cell.addEventListener('click', function () {\n                    const positionHit = JSON.parse(cell.id);\n                    bot.gameboard.receiveAttack(positionHit);\n                    botContainer.replaceChild(bot.gameboard.render(true), botBoardDiv);\n\n                    //set timeout to clicks\n    \n                    const randomPosition = shuffled.pop();\n                    player.gameboard.receiveAttack(randomPosition);\n                    playerContainer.replaceChild(player.gameboard.render(), playerBoardDiv);\n\n                    console.log(player.gameboard)\n                    console.log(bot.gameboard)\n                    \n    \n                    if (player.gameboard.isEndGame() || bot.gameboard.isEndGame()) {\n                        gameOver(player, bot);\n                    } else {\n                        gameCurrent(player, bot, shuffled);\n                    }\n                });\n            }\n        });\n    });\n}\n\nfunction gameOver(player, bot) {\n    const form = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.endForm)(bot.gameboard.isEndGame() ? player.name : bot.name)\n\n    form.addEventListener(\"submit\", function(event) {\n        event.preventDefault();\n\n        form.close();\n        form.remove();\n\n        const botContainer = document.querySelector('.player-2');\n        const playerContainer = document.querySelector('.player-1');\n\n        botContainer.innerHTML = '';\n        playerContainer.innerHTML = '';\n\n        const playerOneGameBoard = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard()\n        const playerTwoGameBoard = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard()\n\n        const playerOne = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Player(player.name, 'human', playerOneGameBoard)\n        const playerTwo = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Player('Bot', 'computer', playerTwoGameBoard)\n\n        gameStartShips(playerOne, playerTwo)\n    });\n}\n\nfunction allPositions() {\n    const positions = [];\n    for (let i = 0; i < 10; i++) {\n        for (let j = 0; j < 10; j++) {\n            positions.push([i, j]);\n        }\n    }\n    return positions;\n}\n\nfunction shuffle(array) {\n    for (let i = array.length - 1; i > 0; i--) {\n        const j = Math.floor(Math.random() * (i + 1));\n        [array[i], array[j]] = [array[j], array[i]];\n    }\n    return array;\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/js/states.js?");

/***/ }),

/***/ "./src/assets/Merriweather-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/Merriweather-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"da67ca8c38ef44c4773d.ttf\";\n\n//# sourceURL=webpack://battleship/./src/assets/Merriweather-Regular.ttf?");

/***/ }),

/***/ "./src/assets/robotIcon.png":
/*!**********************************!*\
  !*** ./src/assets/robotIcon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"62b6d051f99780dd6264.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/robotIcon.png?");

/***/ }),

/***/ "./src/assets/userIcon.png":
/*!*********************************!*\
  !*** ./src/assets/userIcon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6acf5a8d69dd67eea70b.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/userIcon.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;