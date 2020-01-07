import axios from 'axios'

export const getCurrentSpot = (placetype) => {
    return axios.get(`/api/spots/${placetype.id}`)
}