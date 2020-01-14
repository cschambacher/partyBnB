import { connect } from 'react-redux';
import BookingShow from './booking_show';
import { fetchBooking } from '../../../actions/booking_actions';

const mapStateToProps = state => ({
    booking: state.entities.currentBooking
});

const mapDispatchToProps = dispatch => ({
    fetchBooking: (bookingId) => dispatch(fetchBooking(bookingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingShow);