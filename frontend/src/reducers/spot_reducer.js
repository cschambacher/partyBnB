import {RECEIVE_CURRENT_SPOT} from '../actions/spot_actions'

const SpotReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_SPOT:
            newState.user = action.placetype
            return newState
    
        default: state
    }
}

export default SpotReducer