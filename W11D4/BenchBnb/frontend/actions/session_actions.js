import { signUp, logIn, logOut } from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR ERRORS";

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
        errors: errors.responseJSON
    })
}

export const clearErrors = () => {
    return ({
        type: CLEAR_ERRORS
    })
}

export const login = (formUser) => (dispatch) => {
    logIn(formUser)
        .then((user) => dispatch(receiveCurrentUser(user)))
        .fail((errors) => dispatch(receiveErrors(errors)));
}

export const logout = () => (dispatch) => {
    logOut()
        .then(() => dispatch(logoutCurrentUser()))
        .fail((errors) => dispatch(receiveErrors(errors)));

}

export const signup = (formUser) => (dispatch) => {
    signUp(formUser)
        .then((user) => dispatch(receiveCurrentUser(user)))
        .fail((errors) => dispatch(receiveErrors(errors)));
}
