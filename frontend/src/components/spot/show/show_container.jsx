
import { connect } from 'react-redux';
import Show from './show';
import { fetchSpot, deleteSpot } from '../../../util/spot_util';
import { receiveBooking } from "../../../actions/booking_actions";
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const currUser = state.session.user;
    return{
        currUser: currUser
    }
};

const mapDispatchToProps = dispatch => {
    
    return{
    deleteSpot: spotId => dispatch(deleteSpot(spotId)),
    sendBooking: booking => dispatch(receiveBooking(booking))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);