import { combineReducers } from 'redux';
import SpotFormReducer from './spot_form_reducer';
import currentBookingReducer from './current_booking_reducer';
import UsersReducer from './users_reducer';
import searchReducer from './search_reducer';
const entitiesReducer = combineReducers({
    spotForm: SpotFormReducer,
    currentBooking: currentBookingReducer,
    users: UsersReducer,
    search: searchReducer
});

export default entitiesReducer;