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

eval("\n// 2.2 : Créer deux étudiants et les stocker dans un tableau\nconst student1 = {\n    firstName: \"John\",\n    lastName: \"Doe\",\n    age: 20,\n    location: \"New York\",\n};\nconst student2 = {\n    firstName: \"Jane\",\n    lastName: \"Smith\",\n    age: 22,\n    location: \"London\",\n};\nconst studentsList = [student1, student2];\n// 2.3 : Générer une table HTML avec Vanilla JavaScript\nconst body = document.querySelector(\"body\");\n// Créer la table\nconst table = document.createElement(\"table\");\nconst tableHead = document.createElement(\"thead\");\nconst tableBody = document.createElement(\"tbody\");\n// Ajouter les colonnes d'en-tête\nconst headerRow = document.createElement(\"tr\");\nconst headerFirstName = document.createElement(\"th\");\nheaderFirstName.textContent = \"First Name\";\nconst headerLocation = document.createElement(\"th\");\nheaderLocation.textContent = \"Location\";\nheaderRow.appendChild(headerFirstName);\nheaderRow.appendChild(headerLocation);\ntableHead.appendChild(headerRow);\ntable.appendChild(tableHead);\n// Remplir le tableau avec les étudiants\nstudentsList.forEach((student) => {\n    const row = document.createElement(\"tr\");\n    const firstNameCell = document.createElement(\"td\");\n    firstNameCell.textContent = student.firstName;\n    const locationCell = document.createElement(\"td\");\n    locationCell.textContent = student.location;\n    row.appendChild(firstNameCell);\n    row.appendChild(locationCell);\n    tableBody.appendChild(row);\n});\n// Ajouter le contenu au DOM\ntable.appendChild(tableBody);\nbody === null || body === void 0 ? void 0 : body.appendChild(table);\n\n\n//# sourceURL=webpack://holbertonschool-web_react/./js/main.ts?");

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