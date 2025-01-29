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

eval("\n// Étape 3 : Exemple d'utilisation de Directors\nconst director1 = {\n    firstName: 'John',\n    lastName: 'Doe',\n    location: 'London',\n    fullTimeEmployee: true,\n    numberOfReports: 17,\n};\nconsole.log(director1);\n// Étape 5 : Implémentation de la fonction printTeacher\nconst printTeacher = (firstName, lastName) => {\n    return `${firstName.charAt(0)}. ${lastName}`;\n};\n// Exemple d'utilisation de printTeacher\nconsole.log(printTeacher(\"John\", \"Doe\")); // Affiche \"J. Doe\"\nconsole.log(printTeacher(\"Alice\", \"Smith\")); // Affiche \"A. Smith\"\n// Sélectionner l'élément output\nconst output = document.getElementById(\"output\");\nconst teacherOutput = document.getElementById(\"teacher-output\");\nif (output) {\n    output.innerHTML = `\n        <p><strong>First Name:</strong> ${director1.firstName}</p>\n        <p><strong>Last Name:</strong> ${director1.lastName}</p>\n        <p><strong>Location:</strong> ${director1.location}</p>\n        <p><strong>Full Time Employee:</strong> ${director1.fullTimeEmployee}</p>\n        <p><strong>Number of Reports:</strong> ${director1.numberOfReports}</p>\n    `;\n}\n// Afficher le résultat de printTeacher après sa définition\nif (teacherOutput) {\n    teacherOutput.innerHTML = `\n      <p><strong>Formatted Name:</strong> ${printTeacher(\"John\", \"Doe\")}</p>\n  `;\n}\n\n\n//# sourceURL=webpack://holbertonschool-web_react/./js/main.ts?");

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