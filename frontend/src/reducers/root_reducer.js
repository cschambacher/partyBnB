import { combineReducers } from 'redux';
import session from './session_api_reducer';
import errors from './errors_reducer';
import entitiesReducer from './entities_reducer';
import reviewReducer from './reviews_reducer'
const RootReducer = combineReducers({
    session,
    errors,
    entities: entitiesReducer,
    reviews: reviewReducer
});

export default RootReducer;