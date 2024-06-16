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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/classes.js */ \"./src/js/classes.js\");\n\n\nconst testShipOne = new _js_classes_js__WEBPACK_IMPORTED_MODULE_0__.Ship(4, [2,3], 'horizontal')\nconst testShipTwo = new _js_classes_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3, [6, 5])\nconst testBoard = new _js_classes_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard()\n\nconsole.log(testShipOne)\nconsole.log(testShipTwo)\n\ntestBoard.coordinate(testShipOne)\ntestBoard.coordinate(testShipTwo)\nconsole.log(testBoard)\n\ntestBoard.receiveAttack([2,3])\ntestBoard.receiveAttack([4,2])\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/js/classes.js":
/*!***************************!*\
  !*** ./src/js/classes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    constructor(shipLength, position=[], direction='vertical') {\n        this.shipLength = shipLength\n        this.hits = 0\n        this.sunk = false\n        this.position = position\n        this.direction = direction\n    }\n\n    hit() {\n        this.hits++;\n        return this.hits;\n    }\n\n    isSunk() {\n        if (this.hits === this.shipLength) {\n            this.sunk = true;\n        }\n        return this.sunk;\n    }\n}\n\nclass Gameboard {\n    constructor() {\n        this.current = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => 0));\n        this.ships = []\n        this.visited = 0\n    }\n\n    coordinate(ship) {\n        this.ships.push(ship)\n\n        if (ship.direction=='vertical') {\n            for (let i = 0; i < ship.shipLength; i++) {\n                this.current[ship.position[0]][ship.position[1]+i] = 1;\n                ship.position.push([ship.position[0], ship.position[1]+i])\n            }\n        } else {\n            for (let i = 0; i < ship.shipLength; i++) {\n                this.current[ship.position[0]+i][ship.position[1]] = 1;\n                ship.position.push([ship.position[0], ship.position[1]+i])\n            }\n        }\n        ship.position.splice(0, 2);\n    }\n\n    receiveAttack(positionHit) {\n        this.ships.forEach(ship => {\n            ship.position.forEach(pos => {\n                if (pos[0] === positionHit[0] && pos[1] === positionHit[1]) {\n                    ship.hit();\n                }\n            });\n        });\n        this.current[positionHit[0]][positionHit[1]] = 2;\n        this.visited++;\n    }\n\n    isEndGame() {\n        if (this.visited === 100) {\n            console.log('No more place!!! 0_0')\n        }\n    }\n}\n\nclass Player {\n    \n}\n\n//# sourceURL=webpack://battleship/./src/js/classes.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;