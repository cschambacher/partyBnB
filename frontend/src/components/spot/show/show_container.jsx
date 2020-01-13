
import { connect } from 'react-redux';
import Show from './show';
import { fetchSpot, deleteSpot } from '../../../util/spot_util';

const mapStateToProps = (state, ownProps) => {
    // debugger;
    // return{
    //     currUser: state.session.user
    // }
};

const mapDispatchToProps = dispatch => {
    debugger;
    return{
    deleteSpot: spotId => dispatch(deleteSpot(spotId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);