import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://h57es3eyha.us-east-1.awsapprunner.com/api',
    timeout: 1000,
    headers: {
        'Authorization': 'Bearer token',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
}
});

export default instance;