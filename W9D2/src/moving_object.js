function MovingObject(options){
    this.pos = options.pos;
    this.vel = options['vel']; 
    this.radius = options['radius'];
    this.color = options.color;
    this.game = options.game; 
}

// function MovingObject(pos, vel, radius, color){
//     this.centerX = pos[0];
//     this.centerY = pos[1];
//     this.vel = vel; 
//     this.radius = radius;
//     this.color = color;
// }

MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath()
    
    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
        );
        
        ctx.fill();
    }


MovingObject.prototype.move = function(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.game.wrap(this.pos);
}

MovingObject.prototype.isCollidedWith = function (otherObject) {
    let selfX = this.pos[0];
    let selfY = this.pos[1];
    let otherX = otherObject.pos[0];
    let otherY = otherObject.pos[1];
    let dist = Math.sqrt((selfX - otherX) ** 2 + (selfY - otherY) ** 2)+10;
    return dist < this.radius + otherObject.radius;
    
}

MovingObject.prototype.collideWith = function (otherObject){
    this.game.remove(this);
    otherObject.game.remove(otherObject);
}



// this 
module.exports = MovingObject;