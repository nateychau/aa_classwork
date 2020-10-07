import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON_DETAILS } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_ALL_POKEMON:
            nextState = action.pokemon;
            return nextState;
        case RECEIVE_POKEMON_DETAILS:
            nextState[action.pokemon.id] = action.pokemon;
            return nextState;
        default:
            return state;
    }
}


export default pokemonReducer;