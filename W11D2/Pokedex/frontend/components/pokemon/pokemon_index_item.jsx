import React from 'react'
import { Link } from "react-router-dom";

export const PokemonIndexItem = ({pokemon}) =>{
    return(
        <li>
            <Link to='/pokemon/:pokemonId'>
                <img src={pokemon.image_url}></img>
                { pokemon.name }
            </Link>
        </li>
    )
}