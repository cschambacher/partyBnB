import axios from 'axios'

export const updateCurrentSpot = (spotId, payload) => {
    console.log(spotId);
    return axios({
        method: 'PATCH',
        url: `/api/spots/${spotId}`,
        data: payload
    });
}

export const createCurrentSpot = spot => {
    if (spot){
      return axios.post("api/spots", spot);
    } else {
        return axios.post("api/spots");
    }
}

