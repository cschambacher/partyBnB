import {
  RECEIVE_CURRENT_SPOT,
  RECEIVE_PLACE_TYPE
} from "../actions/spot_actions";

const SpotFormReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_SPOT:
            return Object.assign({}, state, action.currentSpot);
        case RECEIVE_PLACE_TYPE:
            return Object.assign({}, state, {placeType: action.placeType})
        default: state
    }
}

export default SpotFormReducer