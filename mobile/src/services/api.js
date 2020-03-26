import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.13.199:3314'
});

export default api;