import axios from 'axios';
export const createBooking = (booking) => (
    axios.post(`api/booking`, booking)
);

export const fetchBooking = bookingId => (
    axios.get(`api/booking/${bookingId}`)
);

export const fetchUsersBookings = userId => (
    axios.get(`api/booking/user/${userId}`)
)