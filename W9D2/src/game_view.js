const Game = require("./game.js")

function GameView(ctx){
    this.ctx = ctx;
    this.game = new Game();

}

GameView.prototype.start = function(){
    setInterval(() => {
        this.game.draw(this.ctx);
        this.game.step();
        // console.log('you are in the interval');
    } ,20);
}

module.exports = GameView;