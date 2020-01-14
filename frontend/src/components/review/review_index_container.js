import {connect} from 'react-redux'
import { fetchReview } from '../../actions/review_actions'
import Review from './review_index'

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews

    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        fetchReview: (spotId) => dispatch(fetchReview(spotId))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Review)