import axios from 'axios';
export const fetchSpots = () => (
    axios.get('/api/spots')
)

export const fetchSpot = (spotId) => (
    axios.get(`/api/spots/${spotId}`)
)

export const stateGuestSearch = (state, guests) => (
    axios.get(`/api/search/state/?state=${state}&maxGuestSize=${guests}`)
)