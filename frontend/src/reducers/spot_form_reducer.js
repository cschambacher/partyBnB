import {
  RECEIVE_CURRENT_SPOT,
  REMOVE_SPOT
} from "../actions/spot_actions";

const SpotFormReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_SPOT:
            return Object.assign({}, state, action.currentSpot.data);
        case REMOVE_SPOT:
            let nextState = Object.assign({}, state);
            delete nextState[action.spotId]
            return nextState;
        default: 
        return state;
    }
}

export default SpotFormReducer