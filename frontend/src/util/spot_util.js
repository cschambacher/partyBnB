import axios from 'axios';
export const fetchSpots = () => (
    axios.get('/api/spots')
)
export const fetchAllSpots = () => (
    axios.get('/api/spots/all')
)

export const fetchSpot = (spotId) => (
    axios.get(`/api/spots/${spotId}`)
)

export const stateGuestSearch = (state, guests) => (
    axios.get(`/api/search/state/?state=${state}&maxGuestSize=${guests}`)
)
export const deleteSpot = (spotId) => (
    axios.delete(`/api/spots/${spotId}`)
)
 
export const locationSearch = (lat, lon, distance=100) => (
    axios.get(`api/search/location/?lat=${lat}&lon=${lon}&distance=${distance}`)
)

