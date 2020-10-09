import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions'
import Search from './search';

const mapStateToProps = (state) => {
    return ({
        benches: state.entities.benches
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchBenches: () => dispatch(fetchBenches())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)