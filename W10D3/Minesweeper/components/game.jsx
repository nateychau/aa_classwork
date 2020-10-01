import { render } from "react-dom";
import React from "react";
import * as Minesweeper from "../minesweeper.js";
import Board from "./board";

class Game extends React.Component{
    constructor() {
        super();
        this.state = {
            board: new Minesweeper.Board(9, 2)
        }
        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }
    
    updateGame(tile, isFlagging){
        if(isFlagging){
            tile.toggleFlag();
        }else{
            tile.explore();
        }
        this.setState({ board: this.state.board })
    }

    // componentDidUpdate(){
    //     if(this.state.board.won()){
    //         alert('you win');
    //     }else if(this.state.board.lost()){
    //         alert('you lose');
    //     }
    // }

    restartGame(){
        this.setState({board: new Minesweeper.Board(9,2)})
    }
    
    render(){
        if(this.state.board.won()){
            return(
            <div>
                <div className="modal-is-open">
                    <div className="modal-form">
                        <h1>You won!</h1>
                        <button onClick={this.restartGame}>Play again</button>
                    </div>
                </div>
                <div className='game'>
                <h2>Minesweeper</h2>
                <p>Click to explore a tile</p>
                <p>Alt + click to flag a tile.</p>
                <Board board={this.state.board} updateGame={this.updateGame}/>
                </div>
            </div>
            )
        }else if(this.state.board.lost()){
            return (
            <div>
            <div className="modal-is-open">
                <div className="modal-form">
                    <h1>You lost!</h1>
                    <button onClick={this.restartGame}>Play again</button>
                </div>
            </div>
            <div className='game'>
                <h2>Minesweeper</h2>
                <p>Click to explore a tile</p>
                <p>Alt + click to flag a tile.</p>
                <Board board={this.state.board} updateGame={this.updateGame}/>
            </div>
            </div>
            )
        }else{
        return (   
            <div className='game'>
                <h2>Minesweeper</h2>
                <p>Click to explore a tile</p>
                <p>Alt + click to flag a tile.</p>
                <Board board={this.state.board} updateGame={this.updateGame}/>
            </div>
        )}
    }
    
}




export default Game;