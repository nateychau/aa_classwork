
class HanoiView{
    constructor(game, $el){
        this.game = game;
        this.$el = $el;
        this.setupTowers();
        this.render();
    }

    setupTowers(){
        let $ul = $('<ul class="grid"></ul>');
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                let $li = $('<li class="stack"></li>');
                if(i === 0 && j === 0){
                    $li.addClass('large');
                }else if(i === 0 && j === 1){
                    $li.addClass('med');
                }else if(i === 0 && j === 2){
                    $li.addClass('small');
                }
                $($ul).append($li);
            }
        }
        $(this.$el).append($ul);
    }

    render(){

    }
}

module.exports = HanoiView;