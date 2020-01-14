import {connect} from 'react-redux'
import {createReview} from '../../actions/review_actions'


const mapStateToProps = (state) => {
    return {

    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        createReview: (review) => dispatch(createReview(review))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)()