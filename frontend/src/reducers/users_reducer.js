import { RECEIVE_PROFILE_USER } from '../actions/users_actions';
const UsersReducer = (state = null, action) => {
    switch (action.type) {
        case RECEIVE_PROFILE_USER:
            return action.currentUser.data
        default:
            return state;
    }
}

export default UsersReducer;