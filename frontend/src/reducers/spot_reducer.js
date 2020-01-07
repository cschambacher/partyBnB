import {RECEIVE_CURRENT_SPOT} from '../actions/spot_actions'

const SpotReducer = (state = {}, action) => {
    Object.freeze(state)
    // let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_SPOT:
            return action.placetype;
    
        default: state
    }
}

export default SpotReducer