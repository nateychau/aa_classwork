import React from 'react'
import { PokemonIndexItem } from './pokemon_index_item'
import PokemonDetailContainer from './pokemon_detail_container'
import { Route } from 'react-router-dom'

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.requestAllPokemon();
    }
    
    render() {
        const pokeArray = this.props.pokemon.map((pokemon) => {
            return <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>
        })
        return( 
            <>
                <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer}></Route>
                <section className='pokedex'>
                    <ul>
                        { pokeArray }
                    </ul>
                </section>
            </>
        )
    }
}

export default PokemonIndex;