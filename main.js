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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n/* main */\r\n\r\n.main-content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n}\r\n\r\n/* forms */\r\n\r\ndialog {\r\n    display: flex;\r\n    align-self: center;\r\n    justify-self: center;\r\n    border: none;\r\n}\r\n\r\n/* boards */\r\n\r\n.row > div {\r\n    border: 3px solid black;\r\n    width: 30px;\r\n    height: 50px;\r\n}\r\n\r\n#board-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n/* cells */\r\n\r\n.unvisited.ship {\r\n    background-color: blueviolet;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_states_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/states.js */ \"./src/js/states.js\");\n/* harmony import */ var _js_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/classes.js */ \"./src/js/classes.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const playerOneGameBoard = new _js_classes_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard()\r\n    const playerTwoGameBoard = new _js_classes_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard()\r\n\r\n    const playerOne = new _js_classes_js__WEBPACK_IMPORTED_MODULE_1__.Player('Ajax', 'human', playerOneGameBoard)\r\n    const playerTwo = new _js_classes_js__WEBPACK_IMPORTED_MODULE_1__.Player('Bot', 'computer', playerTwoGameBoard)\r\n\r\n    ;(0,_js_states_js__WEBPACK_IMPORTED_MODULE_0__.gameStartShips)(playerOne, playerTwo)\r\n});\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/js/classes.js":
/*!***************************!*\
  !*** ./src/js/classes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\r\n    constructor(shipLength, position=[], direction='vertical') {\r\n        this.shipLength = shipLength\r\n        this.hits = 0\r\n        this.sunk = false\r\n        this.position = position\r\n        this.direction = direction\r\n    }\r\n\r\n    hit() {\r\n        this.hits++;\r\n        return this.hits;\r\n    }\r\n\r\n    isSunk() {\r\n        if (this.hits === this.shipLength) {\r\n            this.sunk = true;\r\n        }\r\n        return this.sunk;\r\n    }\r\n}\r\n\r\nclass Gameboard {\r\n    constructor() {\r\n        this.current = Array.from({ length: 10 }, () => Array(10).fill(0));\r\n        this.ships = []\r\n        this.visited = 0\r\n        this.hits = 0\r\n    }\r\n\r\n    coordinate(ship) {\r\n        if (!this.validation(ship)) {\r\n            throw new Error(\"you almost broke the game -_- try again!!!\");\r\n        }\r\n\r\n        this.ships.push(ship)\r\n\r\n        if (ship.direction === 'horizontal') {\r\n            for (let i = 0; i < ship.shipLength; i++) {\r\n                this.current[ship.position[0]][ship.position[1] + i] = 1;\r\n            }\r\n        } else {\r\n            for (let i = 0; i < ship.shipLength; i++) {\r\n                this.current[ship.position[0] + i][ship.position[1]] = 1;\r\n            }\r\n        }\r\n    }\r\n    \r\n    receiveAttack(positionHit) {\r\n        this.ships.forEach(ship => {\r\n            ship.position.forEach(pos => {\r\n                if (pos[0] === positionHit[0] && pos[1] === positionHit[1]) {\r\n                    ship.hit();\r\n                    this.hits++;\r\n                }\r\n            });\r\n        });\r\n        this.current[positionHit[0]][positionHit[1]] = 2;\r\n        this.visited++;\r\n    }\r\n\r\n    isEndGame() {\r\n        if (this.visited === 100) {\r\n            console.log('No more place!!! 0_0')\r\n        }\r\n        if (this.hits === 30) {\r\n            console.log('You lost!!! >:]')\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const boardDiv = document.createElement(\"div\");\r\n        boardDiv.id = \"board-container\"\r\n\r\n        this.current.forEach((row, indexRow) => {\r\n            const rowDiv = document.createElement(\"div\");\r\n            rowDiv.className = \"row\";\r\n    \r\n            row.forEach((cell, indexCol) => {\r\n                const boardCell = document.createElement(\"div\");\r\n                boardCell.id = `[${indexRow}, ${indexCol}]`;\r\n    \r\n                if (cell === 0) {\r\n                    boardCell.className = \"unvisited\";\r\n                } else if (cell === 1) {\r\n                    boardCell.className = \"unvisited ship\";\r\n                } else if (cell === 2) {\r\n                    boardCell.className = \"visited\";\r\n                } else {\r\n                    boardCell.className = \"visited ship\";\r\n                }\r\n    \r\n                rowDiv.appendChild(boardCell);\r\n            });\r\n    \r\n            boardDiv.appendChild(rowDiv);\r\n        });\r\n    \r\n        return boardDiv;\r\n    }\r\n\r\n    validation(ship) {\r\n        const [row, col] = ship.position;\r\n        const shipLength = ship.shipLength;\r\n        const direction = ship.direction;\r\n\r\n        const bounds = () => {\r\n            if (direction === 'horizontal') {\r\n                return col + shipLength > 10;\r\n            } else {\r\n                return row + shipLength > 10;\r\n            }\r\n        };\r\n\r\n        const collision = () => {\r\n            const deltas = [-1, 0, 1];\r\n\r\n            for (let i = 0; i < shipLength; i++) {\r\n                const currentRow = direction === 'horizontal' ? row : row+i;\r\n                const currentCol = direction === 'horizontal' ? col+i : col;\r\n\r\n                for (let dRow of deltas) {\r\n                    for (let dCol of deltas) {\r\n                        const newRow = currentRow + dRow;\r\n                        const newCol = currentCol + dCol;\r\n                        if (\r\n                            newRow >= 0 && newRow < 10 &&\r\n                            newCol >= 0 && newCol < 10 &&\r\n                            this.current[newRow][newCol] === 1\r\n                        ) {\r\n                            return true;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n\r\n            return false;\r\n        }\r\n\r\n        if (bounds() || collision()) {\r\n            return false;\r\n        }\r\n\r\n        return true;\r\n    }\r\n\r\n    randomize() {\r\n        const shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]\r\n\r\n        shipSizes.forEach(size => {\r\n            let placed = false;\r\n\r\n            while (!placed) {\r\n                const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';\r\n                const row = Math.floor(Math.random() * 10);\r\n                const col = Math.floor(Math.random() * 10);\r\n\r\n                const newShip = new Ship(size, [row, col], direction);\r\n\r\n                if (this.validation(newShip)) {\r\n                    this.coordinate(newShip);\r\n                    placed = true;\r\n                }\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\nclass Player {\r\n    constructor(name, type='human', gameboard) {\r\n        this.name = name\r\n        this.type = type\r\n        this.gameboard = gameboard\r\n    }\r\n}\n\n//# sourceURL=webpack://battleship/./src/js/classes.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   placeShips: () => (/* binding */ placeShips),\n/* harmony export */   startForm: () => (/* binding */ startForm)\n/* harmony export */ });\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ \"./src/js/classes.js\");\n\r\n\r\nfunction startForm() {\r\n    const body = document.querySelector('body');\r\n\r\n    const dialog = document.createElement(\"dialog\");\r\n    dialog.id = \"start-dialog\";\r\n\r\n    const form = document.createElement(\"form\");\r\n    form.id = \"start-form\";\r\n\r\n    const playerName = document.createElement(\"input\");\r\n    playerName.type = \"text\";\r\n    playerName.id = \"player-name-input\";\r\n    playerName.required = true;\r\n    playerName.placeholder = \"Name\";\r\n    form.appendChild(playerName);\r\n\r\n    const submitButton = document.createElement(\"button\");\r\n    submitButton.id = 'submit-button';\r\n    submitButton.type = \"submit\";\r\n    submitButton.textContent = \"submit\";\r\n    form.appendChild(submitButton);\r\n\r\n    dialog.appendChild(form)\r\n    body.appendChild(dialog)\r\n\r\n    dialog.showModal();\r\n\r\n    return dialog;\r\n}\r\n\r\nfunction placeShips(player, container) {\r\n    const shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]\r\n    let shipSizesIndex = 0;\r\n\r\n    function eventListeners(direction) {\r\n        if (shipSizesIndex === shipSizes.length) {\r\n            return true;\r\n        }\r\n\r\n        const boardDiv = container.querySelector(\"#board-container\");\r\n\r\n        const directionButton = document.createElement(\"button\")\r\n        directionButton.id = direction;\r\n        directionButton.textContent = \"change direction\";\r\n        container.appendChild(directionButton)\r\n\r\n        directionButton.addEventListener('click', function () {\r\n            if (directionButton.id === 'vertical') {\r\n                directionButton.id = 'horizontal';\r\n                direction = 'horizontal'\r\n            } else if (directionButton.id === 'horizontal') {\r\n                directionButton.id = 'vertical';\r\n                direction = 'vertical'\r\n            }\r\n        });\r\n\r\n        const rowDivs = boardDiv.querySelectorAll(\".row\");\r\n\r\n        rowDivs.forEach(rowDiv => {\r\n            const cells = rowDiv.querySelectorAll(\"div\");\r\n            cells.forEach(cell => {\r\n                cell.addEventListener('click', function () {\r\n                    const newShip = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Ship(shipSizes[shipSizesIndex], JSON.parse(cell.id), directionButton.id)\r\n                    player.gameboard.coordinate(newShip)\r\n                    shipSizesIndex++;\r\n                    container.innerHTML = '';\r\n                    container.appendChild(player.gameboard.render())\r\n                    eventListeners(direction)\r\n                });\r\n            });\r\n        });\r\n    }\r\n    eventListeners('vertical')\r\n}\n\n//# sourceURL=webpack://battleship/./src/js/dom.js?");

/***/ }),

/***/ "./src/js/states.js":
/*!**************************!*\
  !*** ./src/js/states.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameCurrent: () => (/* binding */ gameCurrent),\n/* harmony export */   gameOver: () => (/* binding */ gameOver),\n/* harmony export */   gameStartForm: () => (/* binding */ gameStartForm),\n/* harmony export */   gameStartShips: () => (/* binding */ gameStartShips)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/js/dom.js\");\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ \"./src/js/classes.js\");\n\r\n\r\n\r\nfunction gameStartForm() {\r\n    const form = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.startForm)()\r\n\r\n    form.addEventListener(\"submit\", function(event) {\r\n        event.preventDefault();\r\n        const playerOneName = document.getElementById(\"player-name-input\").value;\r\n\r\n        form.close();\r\n        form.remove();\r\n\r\n        const playerOneGameBoard = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard()\r\n        const playerTwoGameBoard = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard()\r\n\r\n        const playerOne = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Player(playerOneName, 'human', playerOneGameBoard)\r\n        const playerTwo = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Player('Bot', 'computer', playerTwoGameBoard)\r\n\r\n        gameStartShips(playerOne, playerTwo)\r\n    });\r\n}\r\n\r\nfunction gameStartShips(player, bot) {\r\n    const playerContainer = document.querySelector('.player-1');\r\n    playerContainer.appendChild(player.gameboard.render())\r\n\r\n    ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.placeShips)(player, playerContainer)\r\n    bot.gameboard.randomize()\r\n    const botContainer = document.querySelector('.player-2');\r\n    botContainer.appendChild(bot.gameboard.render())\r\n    \r\n    gameCurrent(player, bot)\r\n}\r\n\r\nfunction gameCurrent(player, bot) {\r\n        /*gameStart(currplayer);\r\n        eventListener(player)\r\n        if gameboard_curr == endgame:\r\n            gameOver()\r\n        else:\r\n            attack*/\r\n}\r\n\r\nfunction gameOver() {\r\n    //print results\r\n    //display reset button\r\n    //clear\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/js/states.js?");

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