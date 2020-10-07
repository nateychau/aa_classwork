import { connect } from 'react-redux'
import { requestPokemonDetails } from '../../actions/pokemon_actions'
import PokemonDetail from './pokemon_detail'
import { selectAllItems } from '../../reducers/selectors'

const mapStateToProps = (state, ownProps) => {
    return ({
        items: selectAllItems(state),
        pokemon: state.pokemon[ownProps.match.params.pokemonId]
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestPokemonDetails: () => (dispatch(requestPokemonDetails()))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);