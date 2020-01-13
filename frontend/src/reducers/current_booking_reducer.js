import { BOOKING_RECEIVED } from '../actions/booking_actions';
const currentBookingReducer = (state={}, action) => {
    switch (action.type) {
        case BOOKING_RECEIVED:
            return action.booking.data
        default:
            return state;
    }
}

export default currentBookingReducer;