import { getSpotReviews, createReview} from "../util/review_util"

export const RECEIVE_SPOT_REVIEWS = 'RECEIVE_SPOT_REVIEWS'
export const RECEIVE_NEW_REVIEW = 'RECEIVE_NEW_REVIEW'

export const receiveSpotReviews = (spotReviews) => {
    return {
        type: RECEIVE_SPOT_REVIEWS,
        spotReviews
    }
}

export const receiveNewReview = (newReview) => {
    return {
        type: RECEIVE_NEW_REVIEW,
        newReview
    }
}



export const fetchReview = (spotId) => (dispatch) => {
    return getSpotReviews(spotId).then(reviews => dispatch(receiveSpotReviews(reviews)))
}

// export const createReview = (review) => (dispatch) => {
//     return createReview(review).then(newReview => dispatch(receiveNewReview(newReview)))
// }