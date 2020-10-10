import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions'
import Search from './search';
import { UPDATE_BOUNDS, updateBounds } from '../actions/filter_actions'

const mapStateToProps = (state) => {
    return ({
        benches: state.entities.benches
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchBenches: () => dispatch(fetchBenches()),
        updateBounds: (bounds) => dispatch(updateBounds(bounds))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)