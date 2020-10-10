import * as APIUtil from '../util/bench_api_util';


export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

const receiveBenches = (benches) => {
    return ({
        type: RECEIVE_BENCHES,
        benches
    })
}

export const fetchBenches = (bounds) => (dispatch) => {
    APIUtil.fetchBenches(bounds)
        .then(benches => dispatch(receiveBenches(benches)))
}