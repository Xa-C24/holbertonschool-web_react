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

eval("\n// Étape 3 : Fonction createEmployee pour créer un employé selon son salaire\nfunction createEmployee(salary) {\n    if (salary >= 1000) {\n        return {\n            salary,\n            workDirectorTasks: () => \"Getting to director tasks\",\n        };\n    }\n    else {\n        return {\n            salary,\n            workTeacherTasks: () => \"Getting to work\",\n        };\n    }\n}\n// Étape 4 : Fonction isDirector pour vérifier si un employé est un directeur\nfunction isDirector(employee) {\n    return employee.workDirectorTasks !== undefined;\n}\n// Étape 5 : Fonction executeWork pour exécuter les bonnes tâches\nfunction executeWork(employee) {\n    if (isDirector(employee)) {\n        console.log(employee.workDirectorTasks());\n    }\n    else {\n        console.log(employee.workTeacherTasks());\n    }\n}\n// Étape 6 : Tests pour valider la fonctionnalité\nconsole.log(\"Test avec un Teacher (salaire = 200) :\");\nexecuteWork(createEmployee(200)); // Affiche \"Getting to work\"\nconsole.log(\"Test avec un Director (salaire = 1000) :\");\nexecuteWork(createEmployee(1000)); // Affiche \"Getting to director tasks\"\n// Étape 7 : Affichage dans la page HTML\nconst output = document.getElementById(\"output\");\nif (output) {\n    const teacher = createEmployee(200);\n    const director = createEmployee(1000);\n    output.innerHTML = `\n    <h2>Employee Work Execution</h2>\n    <p><strong>Teacher:</strong> ${isDirector(teacher) ? \"Director\" : teacher.workTeacherTasks()}</p>\n    <p><strong>Director:</strong> ${isDirector(director) ? director.workDirectorTasks() : \"Teacher\"}</p>\n  `;\n}\n\n\n//# sourceURL=webpack://holbertonschool-web_react/./js/main.ts?");

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