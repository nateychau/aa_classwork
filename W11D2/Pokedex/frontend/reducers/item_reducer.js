import { RECEIVE_POKEMON_DETAILS } from '../actions/pokemon_actions'

const itemReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_POKEMON_DETAILS:
            nextState = action.pokemon.items
            return nextState
        default:
            return state
    }
}

export default itemReducer