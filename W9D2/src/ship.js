const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

function Ship(){
    this.RADIUS = RADIUS;
    this.COLOR = COLOR; 
    this.vel = [0,0];

}

Util.inherits(Ship, MovingObject);