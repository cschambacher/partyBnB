import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import { searchSpots } from '../../actions/spot_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  searchSpots: (lat, lon) => dispatch(searchSpots(lat, lon)),
  logout: () => dispatch(logout())
});

export default (connect(mapStateToProps, mapDispatchToProps))(NavBar);