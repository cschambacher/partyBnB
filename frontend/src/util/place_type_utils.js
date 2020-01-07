import axios from 'axios'

export const getCurrentSpot = (placetype) => {
    return axios({
        method: 'patch',
        url: `/api/spots/${placetype.id}`,
        data: {

        }
    });
}

