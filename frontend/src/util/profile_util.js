import axios from 'axios';

// export const setAuthToken = token => {
//     if (token) {
//         axios.defaults.headers.common['Authorization'] = token;
//     } else {
//         delete axios.defaults.headers.common['Authorization'];
//     }
// };

export const getCurrentUser = () => {
    // console.log(userData);
    return axios.get('/api/users/current');
};
export const getUser = (userId) => {
    // console.log(userData);
    return axios.get(`/api/users/info/${userId}`);
};

// export const login = (userData) => {
//     return axios.post('/api/users/login', userData);
// };