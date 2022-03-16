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

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab7si/./src/assets/style.css?");

/***/ }),

/***/ "./src/pgs/pg1.css":
/*!*************************!*\
  !*** ./src/pgs/pg1.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab7si/./src/pgs/pg1.css?");

/***/ }),

/***/ "./src/pgs/pg2.css":
/*!*************************!*\
  !*** ./src/pgs/pg2.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab7si/./src/pgs/pg2.css?");

/***/ }),

/***/ "./src/pgs/pg3.css":
/*!*************************!*\
  !*** ./src/pgs/pg3.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab7si/./src/pgs/pg3.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ \"./src/assets/style.css\");\n/* harmony import */ var _pgs_pg1_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pgs/pg1.css */ \"./src/pgs/pg1.css\");\n/* harmony import */ var _pgs_pg2_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pgs/pg2.css */ \"./src/pgs/pg2.css\");\n/* harmony import */ var _pgs_pg3_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pgs/pg3.css */ \"./src/pgs/pg3.css\");\n/* harmony import */ var _pgs_pg1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pgs/pg1.js */ \"./src/pgs/pg1.js\");\n/* harmony import */ var _pgs_pg2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pgs/pg2.js */ \"./src/pgs/pg2.js\");\n/* harmony import */ var _pgs_pg3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pgs/pg3.js */ \"./src/pgs/pg3.js\");\n//import './pgs/pg1.js';\r\n//import './pgs/pg2.js';\r\n//import './pgs/pg3.js';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction pg1(){\r\n    (0,_pgs_pg1_js__WEBPACK_IMPORTED_MODULE_4__.crearPg1)();\r\n}\r\n\r\nfunction pg2(){\r\n    (0,_pgs_pg2_js__WEBPACK_IMPORTED_MODULE_5__.crearPg2)();\r\n}\r\n\r\nfunction pg3(){\r\n    (0,_pgs_pg3_js__WEBPACK_IMPORTED_MODULE_6__.crearPg3)();\r\n}\r\n\r\nlet contenedor = document.getElementById(\"body-container\");\r\nlet lista = document.createElement('ul');\r\n\r\nlet opction = document.createElement('li');\r\nlet a1 = document.createElement('a');\r\na1.addEventListener('click', pg1);\r\n//a1.href = \"./pgs/pg1.html\";\r\na1.innerHTML = \"Pagina 1\"\r\nopction.appendChild(a1);\r\n\r\nlet opction2 = document.createElement('li');\r\nlet a2 = document.createElement('a');\r\na2.addEventListener('click', pg2);\r\n//a2.href = \"./pgs/pg2.html\";\r\na2.innerHTML = \"Pagina 2\"\r\nopction2.appendChild (a2);\r\n\r\nlet opction3 = document.createElement('li');\r\nlet a3 = document.createElement('a');\r\na3.addEventListener('click', pg3);\r\n//a3.href = \"./pgs/pg3.html\";\r\na3.innerHTML = \"Pagina 3\"\r\nopction3.appendChild(a3);\r\n\r\nlista.appendChild(opction);\r\nlista.appendChild(opction2);\r\nlista.appendChild(opction3);\r\n\r\ncontenedor.appendChild(lista);\r\n\n\n//# sourceURL=webpack://lab7si/./src/index.js?");

/***/ }),

/***/ "./src/pgs/pg1.js":
/*!************************!*\
  !*** ./src/pgs/pg1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearPg1\": () => (/* binding */ crearPg1)\n/* harmony export */ });\n/* harmony import */ var _tools_pic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/pic.js */ \"./src/tools/pic.js\");\n//import {cuadrado} from './tools/cuadrado.js'\r\n\r\n\r\n\r\nconst crearPg1 = () => {\r\n    let contenedor1 = document.getElementById(\"body-container\");\r\n    contenedor1.innerHTML = \"\";\r\n\r\n    let contenedor = document.createElement(\"div\");\r\n    contenedor.id = 'pg1-contenedor';\r\n\r\n    let titulo = document.createElement(\"h1\");\r\n    const he1 = document.createTextNode(\"Azul\")\r\n    titulo.appendChild(he1)\r\n\r\n    let imagen = document.createElement(\"img\");\r\n    imagen.src = 'https://i.imgur.com/wm4qhyM.jpg'\r\n    imagen.style.width = '300px'\r\n    imagen.style.height = '500px'\r\n\r\n    let texto2 = document.createElement(\"h3\");\r\n    let texto = document.createTextNode(\"Azul es una gata rescatada color gris con machas negros, de ojos verde esmeralda. \\\r\n    Ella es una gata muy amistosa y amorosa que esta acostumbrada a que la mimen, parece una niña berrinchuda\\\r\n    Ella es una gran compañia y le encanta pasar tiempo con sus dueños, darles amor y siempre estar donde ellos esten\");\r\n    texto2.appendChild(texto);\r\n\r\n    let opction = document.createElement('li');\r\n    let a1 = document.createElement('a');\r\n    a1.href = \"./bundle/index.html\";\r\n    a1.innerHTML = \"Regresar\"\r\n    opction.appendChild(a1);\r\n\r\n    let imagen2 = (0,_tools_pic_js__WEBPACK_IMPORTED_MODULE_0__.pic)();\r\n\r\n\r\n    //contenedor = cuadrado('Pagina 1', contenedor,'red');\r\n    contenedor1.appendChild(contenedor);\r\n    contenedor1.appendChild(imagen);\r\n    contenedor1.appendChild(texto2);\r\n    //contenedor1.appendChild(opction);\r\n    contenedor1.appendChild(imagen2);\r\n    \r\n\r\n}\n\n//# sourceURL=webpack://lab7si/./src/pgs/pg1.js?");

/***/ }),

/***/ "./src/pgs/pg2.js":
/*!************************!*\
  !*** ./src/pgs/pg2.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearPg2\": () => (/* binding */ crearPg2)\n/* harmony export */ });\n/* harmony import */ var _tools_pic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/pic.js */ \"./src/tools/pic.js\");\n//import {cuadrado} from './tools/cuadrado.js'\r\n\r\n\r\nconst crearPg2 = () => {\r\n    let contenedor1 = document.getElementById(\"body-container\");\r\n    contenedor1.innerHTML = \"\";\r\n\r\n    let contenedor = document.createElement(\"div\");\r\n    contenedor.id = 'pg2-contenedor';\r\n\r\n    let titulo = document.createElement(\"h1\");\r\n    const he1 = document.createTextNode(\"Zeus\")\r\n    titulo.appendChild(he1)\r\n\r\n    let imagen = document.createElement(\"img\");\r\n    imagen.src = 'https://i.imgur.com/7hLKede.jpg'\r\n    imagen.style.width = '400px'\r\n    imagen.style.height = '500px'\r\n\r\n    let texto2 = document.createElement(\"h3\");\r\n    let texto = document.createTextNode(\" Zeus es un Weimaraner de 5 años, con pelaje gris y ojos verdes\\\r\n    Es un perro muy leal y jugueton que no dudara en jugar con cualquiera que le de atencion\\\r\n    Es una gran compañia para las largas noches de trabajo, y un fiel amigo que siempre te va a subir los animos\");\r\n    texto2.appendChild(texto);\r\n\r\n    let opction = document.createElement('li');\r\n    let a1 = document.createElement('a');\r\n    a1.href = \"./bundle/index.html\";;\r\n    a1.innerHTML = \"Regresar\"\r\n    opction.appendChild(a1);\r\n\r\n\r\n    let imagen2 = (0,_tools_pic_js__WEBPACK_IMPORTED_MODULE_0__.pic)();\r\n\r\n    contenedor1.appendChild(contenedor);\r\n    contenedor1.appendChild(imagen);\r\n    contenedor1.appendChild(texto2);\r\n    //contenedor1.appendChild(opction);\r\n    contenedor1.appendChild(imagen2);\r\n    \r\n//contenedor = cuadrado('Pagina 1', contenedor,'red');\r\n}\n\n//# sourceURL=webpack://lab7si/./src/pgs/pg2.js?");

/***/ }),

/***/ "./src/pgs/pg3.js":
/*!************************!*\
  !*** ./src/pgs/pg3.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearPg3\": () => (/* binding */ crearPg3)\n/* harmony export */ });\n/* harmony import */ var _tools_pic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/pic.js */ \"./src/tools/pic.js\");\n//import {cuadrado} from './tools/cuadrado.js'\r\n\r\n\r\nconst crearPg3 = () => {\r\n    let contenedor1 = document.getElementById(\"body-container\");\r\n    contenedor1.innerHTML = \"\";\r\n    let contenedor = document.createElement(\"div\");\r\n    contenedor.id = 'pg3-contenedor';\r\n\r\n    let titulo = document.createElement(\"h1\");\r\n    const he1 = document.createTextNode(\"Rocky\")\r\n    titulo.appendChild(he1)\r\n\r\n    let imagen = document.createElement(\"img\");\r\n    imagen.src = 'https://i.imgur.com/FR9XHh1.jpg'\r\n    imagen.style.width = '630px'\r\n    imagen.style.height = '500px'\r\n\r\n    let texto2 = document.createElement(\"h3\");\r\n    let texto = document.createTextNode(\" Rocky es el primer perro que conozco desde que tenia 1 mes\\\r\n    Ahora tiene 12 años, y aunque los años se empiecen a notar el nunca cambia su carita de felicidad\\\r\n    Sabes que siempre va a estar ahí cuando lo necesites y siempre te va a sacar una sonrisa\");\r\n    texto2.appendChild(texto);\r\n\r\n    let opction = document.createElement('li');\r\n    let a1 = document.createElement('a');\r\n    a1.href = \"/bundle/index.html\";\r\n    a1.innerHTML = \"Regresar\"\r\n    opction.appendChild(a1);\r\n\r\n    let imagen2 = (0,_tools_pic_js__WEBPACK_IMPORTED_MODULE_0__.pic)();\r\n    contenedor1.appendChild(contenedor);\r\n    contenedor1.appendChild(imagen);\r\n    contenedor1.appendChild(texto2);\r\n    //contenedor1.appendChild(opction);\r\n    contenedor1.appendChild(imagen2);\r\n\r\n}\r\n\r\n//contenedor = cuadrado('Pagina 1', contenedor,'red');\r\n\n\n//# sourceURL=webpack://lab7si/./src/pgs/pg3.js?");

/***/ }),

/***/ "./src/tools/pic.js":
/*!**************************!*\
  !*** ./src/tools/pic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pic\": () => (/* binding */ pic)\n/* harmony export */ });\nconst pic = () =>{\r\n    const pic = document.createElement('img');\r\n    pic.src = 'https://i.imgur.com/3mambIw.png';\r\n    pic.style.width = '50px';\r\n    pic.style.height = '50px';\r\n    return pic;\r\n}\n\n//# sourceURL=webpack://lab7si/./src/tools/pic.js?");

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