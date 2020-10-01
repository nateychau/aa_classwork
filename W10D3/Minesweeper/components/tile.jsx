import React from 'react'
import * as Minesweeper from "../minesweeper.js"



//bomb unicode: U+1F4A3
//flag unicode: U+1F6A9
const bomb = "💣";
const flag = "🚩";
class Tile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flagged: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
            if (this.props.tile.flagged){
                return <div onClick={this.handleClick} className="tile-flagged">{flag}</div>
            }else if (this.props.tile.explored){
                if(this.props.tile.bombed){
                    return <div onClick={this.handleClick} className="tile-bombed">{bomb}</div>
                }else{
                    return <div onClick={this.handleClick} className="tile-explored">{this.props.tile.adjacentBombCount()}</div>
                }
            }else{
                return <div onClick={this.handleClick} className="tile-hidden"></div>
            }
    }

    handleClick(e){
        e.preventDefault();
        // debugger
        this.props.updateGame(this.props.tile, e.altKey)
        // if(e.altKey){
        //     this.props.updateGame(this.props.tile, true)
        // }
        // else{
        //     this.props.updateGame(this.props.tile, false)
        // }
    }
}




// const Space = "\u2000";
/* <TranslatedName name={'%C9ire'} />, */


export default Tile;