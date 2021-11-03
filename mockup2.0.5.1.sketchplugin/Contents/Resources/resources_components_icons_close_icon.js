/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/components/icons/close_icon.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/components/icons/close_icon.js":
/*!**************************************************!*\
  !*** ./resources/components/icons/close_icon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return close_icon; });
function close_icon() {
  return {
    __html: '<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' + '    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="Close" fill="#505050" fill-rule="nonzero">\n' + '            <path d="M8,0 C3.582,0 0,3.582 0,8 C0,12.418 3.582,16 8,16 C12.418,16 16,12.418 16,8 C16,3.582 12.418,0 8,0 Z M8,1.33333333 C11.682,1.33333333 14.6666667,4.318 14.6666667,8 C14.6666667,11.682 11.682,14.6666667 8,14.6666667 C4.318,14.6666667 1.33333333,11.682 1.33333333,8 C1.33333333,4.318 4.318,1.33333333 8,1.33333333 Z" id="Shape" transform="translate(8.000000, 8.000000) scale(-1, 1) translate(-8.000000, -8.000000) "></path>\n' + '            <path d="M6.26012729,5.21620366 L8,6.956 L9.73987271,5.21620366 C10.0281443,4.92793211 10.4955248,4.92793211 10.7837963,5.21620366 C11.0720679,5.50447521 11.0720679,5.97185574 10.7837963,6.26012729 L9.044,8 L10.7837963,9.73987271 C11.0720679,10.0281443 11.0720679,10.4955248 10.7837963,10.7837963 C10.4955248,11.0720679 10.0281443,11.0720679 9.73987271,10.7837963 L8,9.044 L6.26012729,10.7837963 C5.97185574,11.0720679 5.50447521,11.0720679 5.21620366,10.7837963 C4.92793211,10.4955248 4.92793211,10.0281443 5.21620366,9.73987271 L6.956,8 L5.21620366,6.26012729 C4.92793211,5.97185574 4.92793211,5.50447521 5.21620366,5.21620366 C5.50447521,4.92793211 5.97185574,4.92793211 6.26012729,5.21620366 Z" id="Combined-Shape"></path>\n' + '        </g>\n' + '    </g>\n' + '</svg>'
  };
}

/***/ })

/******/ });
//# sourceMappingURL=resources_components_icons_close_icon.js.map