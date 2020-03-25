import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3314'
});

export default api;