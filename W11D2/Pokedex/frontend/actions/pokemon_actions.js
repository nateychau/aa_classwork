import * as APIUtil from '../util/api_util'

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON'
export const RECEIVE_POKEMON_DETAILS = 'RECEIVE_POKEMON_DETAILS'

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const receivePokemonDetails = (pokemon) => ({
  type: RECEIVE_POKEMON_DETAILS,
  pokemon
})

// thunk action creator
export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestPokemonDetails = (id) => (dispatch) => (
  APIUtil.fetchPokemonDetail(id)
    .then(pokemon => dispatch(receivePokemonDetails(pokemon)))
)
