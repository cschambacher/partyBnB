import * as APIUtil from '../util/profile_util';

// import jwt_decode from 'jwt-decode';

export const RECEIVE_PROFILE_USER = "RECEIVE_PROFILE_USER";

export const receiveProfileUser = currentUser => {
    return {
        type: RECEIVE_PROFILE_USER,
        currentUser
    }
}
export const fetchCurrentUser = () => dispatch =>
    APIUtil.getCurrentUser().then(user => dispatch(receiveProfileUser(user)));