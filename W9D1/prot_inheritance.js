// Option 1/2 (using surrogate and object.create methods)
// Function.prototype.inherits = function(ParentClass) {
//     function Surrogate() {};
//     Surrogate.prototype = ParentClass.prototype;
//     this.prototype = new Surrogate();
//     this.prototype = Object.create(ParentClass.prototype);
//     this.prototype.constructor = this;
// }

// function MovingObject(name) { 
//     this.name = name;
// }

// MovingObject.prototype.fast = function() {
//     console.log(`${this.name} is moving fast.`)
// }

// // Ship.inherits(MovingObject);

// function Ship(name, speed) { 
//     MovingObject.call(this, name);
//     this.speed = speed;
// }

// Ship.prototype.mph = function() {
//      console.log(`${this.name} is moving at ${this.speed} mph.`);
// }

// // Asteroid.inherits(MovingObject);

// function Asteroid(name, numCraters) { 
//     MovingObject.call(this, name);
//     this.numCraters = numCraters;
// }

// Asteroid.prototype.size = function(){
//     console.log(`${this.name} has ${this.numCraters} craters`);
// }

// Option 3 (using classes)
class MovingObject {
    constructor(name) {
        this.name = name;
    }

    fast() {
        console.log(`${this.name} is moving fast.`)
    }
}

class Ship extends MovingObject {
    constructor(name, speed) {
        super(name);
        this.speed = speed;
    }

    mph() {
        console.log(`${this.name} is moving at ${this.speed} mph.`);
    }
}

class Asteroid extends MovingObject {
    constructor(name, numCraters) {
        super(name);
        this.numCraters = numCraters;
    }

    size() {
        console.log(`${this.name} has ${this.numCraters} craters`);
    }
}


let starship = new Ship('starship', 100);
let mars = new Asteroid('mars', 50);
starship.fast();
mars.fast();
starship.mph();
// mars.mph();
// starship.size();
mars.size();
