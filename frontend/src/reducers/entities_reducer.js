import { combineReducers } from 'redux';
import SpotFormReducer from './spot_form_reducer';
import currentBookingReducer from './current_booking_reducer';
const entitiesReducer = combineReducers({
    spotForm: SpotFormReducer,
    currentBooking: currentBookingReducer
});

export default entitiesReducer;