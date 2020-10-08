import { signUp, logIn, logOut } from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (currentUser) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        currentUser, 
    });
}

const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER,
    });
}
//well go back to it 
const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_ERRORS,
        errors
    })
}

export const login = (user) = (formUser) = (dispatch) => {
    logIn(formUser).then((user) => dispatch(receiveCurrentUser(user)));
}

export const logout = () => {
    dispatch => logOut().then(() => dispatch(logoutCurrentUser()))
}

export const signup = (user) = (formUser) = (dispatch) => {
    signUp(formUser).then((user) => dispatch(receiveCurrentUser(user)))
}
