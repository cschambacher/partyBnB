import axios from 'axios'

export const getCurrentSpot = (placetype) => {
    return axios.patch(`/api/spots/${placetype.id}`)
}