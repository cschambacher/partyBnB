import {getCurrentSpot} from '../util/place_type_utils'

export const RECEIVE_CURRENT_SPOT = 'RECEIVE_CURRENT_SPOT'

export const receiveCurrentSpot = placetype => {
    type: RECEIVE_CURRENT_SPOT,
    placetype
}

export const fetchPlaceType  = (placetype) => (dispatch) => {
    getCurrentSpot(placetype).then(currentSpot => dispatch(receiveCurrentSpot(currentSpot)))
}