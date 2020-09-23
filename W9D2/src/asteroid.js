const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

function Asteroid(options){
    options.color = 'gray';
    options.radius = 50;
    //Might need to change this if asteroids move weird
    options.vel = Util.randomVec(Math.random() * 10);
    MovingObject.call(this,options);    
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;