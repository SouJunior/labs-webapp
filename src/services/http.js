import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/api',
    timeout: 10000,
    headers: headers()
});

function headers () {
    const token = localStorage.getItem('token');

    return {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
}

export default instance;
