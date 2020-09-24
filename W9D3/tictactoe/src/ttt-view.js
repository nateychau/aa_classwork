const Board = require("./board");
const Game = require("./game");

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let that = this; 
    let $grid = $('.grid');
    $($grid).on("click", function(event){
        let $square = $(event.target)
        let pos = $($square).data('position');

        function helperMethod() {
          return that.game.board.isEmptyPos(pos) && Board.isValidPos(pos) 
        }
        
      if (!helperMethod()) {
        alert("invalid move!")
      }
      else{
        $($square).toggleClass('played-square');
        let mark = that.game.currentPlayer; //x or o
        $($square).text(`${mark}`);
        that.game.playMove(pos);

        if(that.game.isOver()){
          let $message = $('<h2></h2>')
          $($message).text(`${mark} wins`);
          $('body').append($message);

          let $button = $('<button></button');
          $button.text('Restart');
          $('body').append($button);
          $button.on('click', function(){
            that.game = new Game();
            $('.grid').remove();
            that.setupBoard();
            that.bindEvents();
          });
        } 
      }
    })
  }

  makeMove($square) {}

  setupBoard() {
    let $grid = $('<ul class="grid"></ul>');
    for(let i=0; i<3; i++ ){
      for(let j=0; j<3; j++){
        let $square = $('<li class="square"></li>').data('position', [i,j]);; 
        $($grid).append($square)
      }
    }
    $(this.$el).append($grid);
  }
}


module.exports = View;
