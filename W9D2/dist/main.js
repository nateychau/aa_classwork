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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Asteroid(options){\n    options.color = 'gray';\n    options.radius = 50;\n    //Might need to change this if asteroids move weird\n    options.vel = Util.randomVec(Math.random() * 10);\n    MovingObject.call(this,options);    \n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nfunction Game(){\n    this.DIM_X = 1000;\n    this.DIM_Y = 600;\n    this.NUM_ASTEROIDS = 6;\n    this.asteroids = [];\n    let numA = 0;\n    while(numA < this.NUM_ASTEROIDS){\n        this.addAsteroids();\n        numA++;\n    }\n    let sPos = this.randomPosition()\n    this.ship = new Ship({pos: sPos});\n    // this.allObjects\n}\n\nGame.prototype.addAsteroids = function(){\n   let position = this.randomPosition();\n   this.asteroids.push(new Asteroid({pos: position, game: this}));\n}\n\n\nGame.prototype.randomPosition = function(){\n    let pos = [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];\n    // console.log(DIM_X, DIM_Y);\n    console.log(pos);\n    return pos\n}\n\nGame.prototype.draw = function(ctx){\n    ctx.clearRect(0,0, this.DIM_X, this.DIM_Y);\n    this.asteroids.forEach((asteroid) => {\n        asteroid.draw(ctx);\n    })\n    // this.draw(this.ship)\n}\n\nGame.prototype.moveObjects = function(){\n    this.asteroids.forEach((asteroid)=>{\n        asteroid.move();\n    })\n}\n\nGame.prototype.wrap = function(pos){\n    if(pos[0] >= this.DIM_X){\n        pos[0] = 0;\n    }\n    else if(pos[0] <= 0){\n        pos[0] = 1000;\n    }\n    if(pos[1] <= 0){\n        pos[1] = 600;\n    }\n    else if(pos[1] >= this.DIM_Y){\n        pos[1] = 0;\n    }\n}\n\nGame.prototype.checkCollisions = function(){\n    for (let i = 0; i < this.asteroids.length; i++){\n        let asteroid = this.asteroids[i];\n        for (let j = 0; j < this.asteroids.length; j++){\n            if (i !== j && asteroid.isCollidedWith(this.asteroids[j])){\n                asteroid.collideWith(this.asteroids[j]);\n                // alert(\"COLLISION\");\n            }\n        }\n    }\n}\n\nGame.prototype.step = function(){\n    this.moveObjects();\n    this.checkCollisions();\n}\n\nGame.prototype.remove = function(asteroid){\n    this.asteroids.splice(this.asteroids.indexOf(asteroid), 1);\n}\n\n// Game.prototype.allObjects = function(){\n//     this.asteroids.push(this.ship);\n// }\n\n\nmodule.exports = Game;\n\n\n// [700, 260]\n// this[700, 260]\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nfunction GameView(ctx){\n    this.ctx = ctx;\n    this.game = new Game();\n\n}\n\nGameView.prototype.start = function(){\n    setInterval(() => {\n        this.game.draw(this.ctx);\n        this.game.step();\n        // console.log('you are in the interval');\n    } ,20);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\");\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    let canvas = document.getElementById('game-canvas');\n    let ctx = canvas.getContext('2d');\n    // test\n    window.MovingObject = MovingObject;\n    window.ctx = ctx;\n    window.Util = Util;\n    window.Asteroid = Asteroid;\n    window.GameView = GameView;\n    // test\n    let newGame = new GameView(ctx);\n    newGame.start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options){\n    this.pos = options.pos;\n    this.vel = options['vel']; \n    this.radius = options['radius'];\n    this.color = options.color;\n    this.game = options.game; \n}\n\n// function MovingObject(pos, vel, radius, color){\n//     this.centerX = pos[0];\n//     this.centerY = pos[1];\n//     this.vel = vel; \n//     this.radius = radius;\n//     this.color = color;\n// }\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath()\n    \n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n        );\n        \n        ctx.fill();\n    }\n\n\nMovingObject.prototype.move = function(){\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.game.wrap(this.pos);\n}\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n    let selfX = this.pos[0];\n    let selfY = this.pos[1];\n    let otherX = otherObject.pos[0];\n    let otherY = otherObject.pos[1];\n    let dist = Math.sqrt((selfX - otherX) ** 2 + (selfY - otherY) ** 2)+10;\n    return dist < this.radius + otherObject.radius;\n    \n}\n\nMovingObject.prototype.collideWith = function (otherObject){\n    this.game.remove(this);\n    otherObject.game.remove(otherObject);\n}\n\n\n\n// this \nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Ship(){\n    this.RADIUS = RADIUS;\n    this.COLOR = COLOR; \n    this.vel = [0,0];\n\n}\n\nUtil.inherits(Ship, MovingObject);\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate(){};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });