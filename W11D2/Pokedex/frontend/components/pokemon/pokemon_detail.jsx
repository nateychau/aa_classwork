import React from 'react'

class PokemonDetail extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestPokemonDetails(this.props.match.params.pokemon.id);
    }

    render(){
        return (
            <div>
                <ul>
                    <div>Name:</div><li>{this.props.pokemon.name}</li>
                    <div>Type:</div><li>{this.props.pokemon.type}</li>
                    <div>Attack:</div><li>{this.props.pokemon.attack}</li>
                    <div>Defense:</div><li>{this.props.pokemon.defense}</li>
                    <div>Moves:</div><li>{this.props.pokemon.moves}</li>
                    <div>Items:</div><li>{this.props.items}</li>
                </ul>
            </div>
        )
    }
}

export default PokemonDetail;