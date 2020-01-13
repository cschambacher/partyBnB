import { connect } from 'react-redux';
import BookingShow from './booking_show';

const mapStateToProps = state => ({
    booking: state.entities.currentBooking
});

export default connect(mapStateToProps, null)(BookingShow);