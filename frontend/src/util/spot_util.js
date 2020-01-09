import axios from 'axios';
export const fetchSpots = () => (
    axios.get('/api/spots')
)