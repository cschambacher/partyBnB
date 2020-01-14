import axios from "axios"

export const getSpotReviews = (spotId) => {
    return axios.get(`/api/reviews/spots/${spotId}`)
}

// export const createReview = (review) => {
//     return axios.post("/api/reviews/", review)
// }