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

/***/ "./js/crud.ts":
/*!********************!*\
  !*** ./js/crud.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteRow: () => (/* binding */ deleteRow),\n/* harmony export */   insertRow: () => (/* binding */ insertRow),\n/* harmony export */   updateRow: () => (/* binding */ updateRow)\n/* harmony export */ });\nfunction insertRow(row) {\n    console.log(\"Insert row\", row);\n    return Math.floor(Math.random() * Math.floor(1000)); // Génère un ID aléatoire\n}\nfunction deleteRow(rowId) {\n    console.log(\"Delete row id\", rowId);\n}\nfunction updateRow(rowId, row) {\n    console.log(`Update row ${rowId}`, row);\n    return rowId;\n}\n\n\n//# sourceURL=webpack://holbertonschool-web_react/./js/crud.ts?");

/***/ }),

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud */ \"./js/crud.ts\");\n/// <reference path=\"./crud.d.ts\" />\n\n// Création d'un nouvel élément\nconst row = {\n    firstName: \"Guillaume\",\n    lastName: \"Salva\"\n};\n// Insérer un nouvel élément\nconst newRowID = _crud__WEBPACK_IMPORTED_MODULE_0__.insertRow(row);\nconsole.log(`Inserted Row ID: ${newRowID}`);\n// Mise à jour de l'élément\nconst updatedRow = Object.assign(Object.assign({}, row), { age: 23 });\n_crud__WEBPACK_IMPORTED_MODULE_0__.updateRow(newRowID, updatedRow);\nconsole.log(`Updated Row:`, updatedRow);\n// Suppression de l'élément\n_crud__WEBPACK_IMPORTED_MODULE_0__.deleteRow(newRowID);\nconsole.log(`Deleted Row ID: ${newRowID}`);\nconst output = document.getElementById(\"output\");\nif (output) {\n    output.innerHTML = `\n        <h2>CRUD Operations in TypeScript</h2>\n        <p><strong>Inserted Row ID:</strong> ${newRowID}</p>\n        <p><strong>Updated Row:</strong> ${JSON.stringify(updatedRow)}</p>\n        <p><strong>Deleted Row ID:</strong> ${newRowID}</p>\n    `;\n}\nelse {\n    console.error(\"Element #output not found in the DOM!\");\n}\n\n\n//# sourceURL=webpack://holbertonschool-web_react/./js/main.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.ts");
/******/ 	
/******/ })()
;