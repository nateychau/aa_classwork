import ui_reducer from '../reducers/ui_reducer';
import { fetchBenches } from './bench_actions'


export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const updateBoundsAction = (bounds) => {
    return ({
        type: UPDATE_BOUNDS,
        bounds
    })
}

export function updateBounds(value) {
    return (dispatch, getState) => {
        dispatch(updateBoundsAction(value));
        return (fetchBenches(getState().ui.filters.bounds)(dispatch));
      // delicious curry!
    };
  }