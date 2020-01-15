import { RECEIVE_LOCATION_RESULTS } from '../actions/spot_actions';
const searchReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_LOCATION_RESULTS:
            return action.results
        default:
            return state;
    }
}

export default searchReducer;