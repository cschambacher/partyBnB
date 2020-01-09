import axios from 'axios';
export const fetchSpots = () => (
    axios.get('/api/spots')
)

export const fetchSpot = (spotId) => (
    axios.get(`/api/spots/${spotId}`)
)