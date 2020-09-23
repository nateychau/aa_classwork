const Asteroid = require("./asteroid");

function Game(){
    this.DIM_X = 1000;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 6;
    this.asteroids = [];
    let numA = 0;
    while(numA < this.NUM_ASTEROIDS){
        this.addAsteroids();
        numA++;
    }
    let sPos = this.randomPosition()
    this.ship = new Ship({pos: sPos});
    // this.allObjects
}

Game.prototype.addAsteroids = function(){
   let position = this.randomPosition();
   this.asteroids.push(new Asteroid({pos: position, game: this}));
}


Game.prototype.randomPosition = function(){
    let pos = [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];
    // console.log(DIM_X, DIM_Y);
    console.log(pos);
    return pos
}

Game.prototype.draw = function(ctx){
    ctx.clearRect(0,0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach((asteroid) => {
        asteroid.draw(ctx);
    })
    // this.draw(this.ship)
}

Game.prototype.moveObjects = function(){
    this.asteroids.forEach((asteroid)=>{
        asteroid.move();
    })
}

Game.prototype.wrap = function(pos){
    if(pos[0] >= this.DIM_X){
        pos[0] = 0;
    }
    else if(pos[0] <= 0){
        pos[0] = 1000;
    }
    if(pos[1] <= 0){
        pos[1] = 600;
    }
    else if(pos[1] >= this.DIM_Y){
        pos[1] = 0;
    }
}

Game.prototype.checkCollisions = function(){
    for (let i = 0; i < this.asteroids.length; i++){
        let asteroid = this.asteroids[i];
        for (let j = 0; j < this.asteroids.length; j++){
            if (i !== j && asteroid.isCollidedWith(this.asteroids[j])){
                asteroid.collideWith(this.asteroids[j]);
                // alert("COLLISION");
            }
        }
    }
}

Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function(asteroid){
    this.asteroids.splice(this.asteroids.indexOf(asteroid), 1);
}

// Game.prototype.allObjects = function(){
//     this.asteroids.push(this.ship);
// }


module.exports = Game;


// [700, 260]
// this[700, 260]