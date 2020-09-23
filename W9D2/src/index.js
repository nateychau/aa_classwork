console.log("Webpack is working!");

const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js");
const GameView = require("./game_view.js");
const Ship = require("./ship.js");


window.addEventListener('DOMContentLoaded', (event) => {
    let canvas = document.getElementById('game-canvas');
    let ctx = canvas.getContext('2d');
    // test
    window.MovingObject = MovingObject;
    window.ctx = ctx;
    window.Util = Util;
    window.Asteroid = Asteroid;
    window.GameView = GameView;
    // test
    let newGame = new GameView(ctx);
    newGame.start();
});