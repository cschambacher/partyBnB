import axios from 'axios';
export const createBooking = (booking) => (
    axios.post(`api/booking`, booking)
);