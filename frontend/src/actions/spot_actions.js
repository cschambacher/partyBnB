import { updateCurrentSpot, createCurrentSpot} from '../util/spot_form_utils';
import * as spotAPIUtil from '../util/spot_util';

export const RECEIVE_CURRENT_SPOT = 'RECEIVE_CURRENT_SPOT';
export const RECEIVE_PLACE_TYPE = "RECEIVE_PLACE_TYPE";
export const REMOVE_SPOT = 'REMOVE_SPOT';
export const RECEIVE_LOCATION_RESULTS = "RECEIVE_LOCATION_RESULTS";

export const receiveCurrentSpot = currentSpot => {
    return {
    type: RECEIVE_CURRENT_SPOT,
    currentSpot 
    }
}

export const createSpot = (spot) => (dispatch) => {
  return createCurrentSpot(spot).then(spot =>
    dispatch(receiveCurrentSpot(spot))
  );
}

export const receiveSearchResults = (results) => ({
  type: RECEIVE_LOCATION_RESULTS,
  results
})

// export const searchSpots = (lat, lon, location=100) => dispatch => (
//   spotAPIUtil.locationSearch(lat, lon, location) =>
// )

export const updateSpot = (spotId, updatePayload) => dispatch =>
  updateCurrentSpot(spotId, updatePayload).then(spot => dispatch(receiveCurrentSpot(spot)));

export const fetchSpot = (spotId) => dispatch =>
spotAPIUtil.fetchSpot(spotId).then(spot => dispatch(receiveCurrentSpot(spot)));

export const deleteSpot = spotId => dispatch => {
  debugger;
  return spotAPIUtil.deleteSpot(spotId)
    .then(() => dispatch(removeSpot(spotId)))
};
const removeSpot = spotId => ({
  type: REMOVE_SPOT,
  spotId
});