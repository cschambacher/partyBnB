import { connect } from 'react-redux';
import { fetchCurrentUser } from '../../actions/users_actions';
// import { fetchSpots } from '../../util/spot_util';
// import { selectUser } from '../../reducer/selectors';
import Profile from './profile';


const mstp = (state, ownProps) => {
    // // const userId = parseInt(ownProps.match.params.userId);
    const user = state.entities.users;
    // const bookings = state.entities.currentBooking;
    // const spots = selectUserSpots(state, user);
    return {
        user
        
    };
};

const mdtp = dispatch => ({
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    // fetchSpots: () => dispatch(fetchSpots())
});


export default connect(mstp, mdtp)(Profile)