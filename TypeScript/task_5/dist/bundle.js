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

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("\n// Étape 2 : Implémenter la classe ClassRoom\nclass ClassRoom {\n    constructor(maxStudentsSize) {\n        this.maxStudentsSize = maxStudentsSize;\n    }\n}\n// Étape 3 : Exemple d'utilisation de ClassRoom\nconst room1 = new ClassRoom(20);\nconsole.log(`Classroom created with max size: ${room1.maxStudentsSize}`);\n// Sélectionner l'élément output\nconst output = document.getElementById(\"output\");\nif (output) {\n    output.innerHTML = `\n        <h2>ClassRoom Information</h2>\n        <p><strong>Max Students Size:</strong> ${room1.maxStudentsSize}</p>\n    `;\n}\n\n\n//# sourceURL=webpack://holbertonschool-web_react/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;