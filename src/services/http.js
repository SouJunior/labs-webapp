import axios from 'axios';

const token = localStorage.getItem('token');

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/api',
    timeout: 1000,
    headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

export default instance;
