import * as bookingAPIUtil from '../util/booking_util';
export const BOOKING_RECEIVED = "BOOKING_RECEIVED";

export const receiveBooking = (booking) => ({
    type: BOOKING_RECEIVED,
    booking
});

export const createBooking = booking => dispatch => (
    bookingAPIUtil.createBooking(booking).then(dispatch(receiveBooking(booking.data)))
);