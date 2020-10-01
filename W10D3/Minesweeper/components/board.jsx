import Tile from './tile.jsx'
import React from 'react'
import * as Minesweeper from "../minesweeper.js"

class Board extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                {this.props.board.grid.map((row, rowIdx) =>{
                    return <div className ='board-row' key={rowIdx}>{row.map((tile, tileIdx)=>{
                        return <Tile className = "tile-hidden" tile={tile} updateGame={this.props.updateGame} key={tileIdx}/>
                    })}</div>
                })}
                
            
            </div>
        )
    }
}

export default Board;