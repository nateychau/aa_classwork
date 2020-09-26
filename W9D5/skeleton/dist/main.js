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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup.js */ \"./src/warmup.js\");\n\n\nclass Clock {\n    constructor() {\n      // 1. Create a Date object.\n      const currentTime = new Date();\n  \n      // 2. Store the hour, minute, and second.\n      this.hours = currentTime.getHours();\n      this.minutes = currentTime.getMinutes();\n      this.seconds = currentTime.getSeconds();\n  \n      // 3. Call printTime.\n      this.printTime();\n  \n      // 4. Schedule the tick at 1 second intervals.\n      setInterval(this._tick.bind(this), 1000);\n    }\n  \n    printTime() {\n      // Format the time in HH:MM:SS\n      const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n  \n      // Use console.log to print it.\n      // console.log(timeString);\n    //   console.log(warmUp);\n    //   console.log(htmlGenerator);\n      Object(_warmup_js__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(timeString, clockElement);\n    }\n  \n    _tick() { \n      // 1. Increment the time by one second.\n      this._incrementSeconds();\n  \n      // 2. Call printTime.\n      this.printTime();\n    }\n  \n    _incrementSeconds() {\n      // 1. Increment the time by one second.\n      this.seconds += 1;\n      if (this.seconds === 60) {\n        this.seconds = 0;\n        this._incrementMinutes();\n      }\n    }\n  \n    _incrementMinutes() {\n      this.minutes += 1;\n      if (this.minutes === 60) {\n        this.minutes = 0;\n        this._incrementHours();\n      }\n    }\n  \n    _incrementHours() {\n      this.hours = (this.hours + 1) % 24;\n    }\n  }\n  \n  const clockElement = document.getElementById(\"clock\");\n  const clock = new Clock();\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator(dogs){\n  let dogList = [];\n  let dogKeys = Object.keys(dogs);\n  for(let i = 0; i < dogKeys.length; i++){\n    let dogName = dogKeys[i];\n    let dogLink = dogs[dogName];\n    \n    let aElement = document.createElement('a');\n    aElement.innerHTML = dogName;\n    aElement.href = dogLink;\n    let liELement = document.createElement('li');\n    liELement.className = 'dog-link';\n    liELement.appendChild(aElement);\n    dogList.push(liELement);\n  }\n  return dogList;\n}\n\nfunction attachDogLinks(){\n  let dogLinks = dogLinkCreator(dogs);\n  \n  let list = document.querySelector('.drop-down-dog-list');\n  dogLinks.forEach((dog)=>{\n    list.appendChild(dog);\n  });\n  let nav = document.getElementsByClassName('drop-down-dog-nav')[0];\n  nav.addEventListener('mouseover', (e)=>{\n    \n    list.style.display = 'block';\n  })\n  nav.addEventListener('mouseout', (e)=>{\n    list.style.display= 'none';\n  })\n}\n\nattachDogLinks();\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n// import {htmlGenerator} from \"./warmup\";\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n// const todos = [];\nconst todoList = document.querySelector('ul.todos');\nconst todoForm = document.querySelector('form.add-todo-form');\n\nfunction addTodo(){\n    let input = document.querySelector('.add-todo-form').firstElementChild;\n    \n    let todo  = {\n        val: input.value,\n        done: false\n    };\n    // todos.push(todo);\n    input.value = '';\n        let label = document.createElement('label');\n        label.innerHTML = todo.val;\n        let checkbox = document.createElement('input');\n        checkbox.type = 'checkbox';\n        if(todo.done){\n            checkbox.checked = true;\n        }\n        let li = document.createElement('li');\n        li.append(label);\n        li.append(checkbox);\n        todoList.append(li);\n}\n// function populateList(){\n//     todos.forEach((todo) => {\n//         let label = document.createElement('label');\n//         label.innerHTML = todo.val;\n//         let checkbox = document.createElement('input');\n//         checkbox.type = 'checkbox';\n//         if(todo.done){\n//             checkbox.checked = true;\n//         }\n//         let li = document.createElement('li');\n//         li.append(label);\n//         li.append(checkbox);\n//         todoList.append(li);\n        \n//     })\n//     todos = [];\n// }\n\ntodoForm.addEventListener('submit', (e) =>{\n    e.preventDefault();\n    addTodo();\n})\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    let newP = document.createElement('p');\n    let textNode = document.createTextNode(string);\n    newP.appendChild(textNode);\n    let clock = document.getElementById('clock');\n    // console.log(clock);\n    clock.innerHTML = '';\n    // clock.removeChild(clock.lastChild);\n    htmlElement.appendChild(newP);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\nhtmlGenerator('I <3 vanilla DOM manipulation',partyHeader);\n\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });