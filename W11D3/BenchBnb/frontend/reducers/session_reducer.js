import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _nullUser = {id: null}
//cosst _nullSession = {currentUser: null}
export const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state) 
  switch (action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {currentUser: action.currentUser})
    case LOGOUT_CURRENT_USER:
      return _nullUser;
      default:
        return state;
  }
}