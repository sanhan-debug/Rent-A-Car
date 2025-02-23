import axios from 'axios';
import { toast } from 'react-hot-toast';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true 
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


api.interceptors.response.use(
    response => response,
    error => {
        if (error.code === 'ERR_NETWORK') {
            toast.error('Server connection failed. Please try again later.');
        }
        return Promise.reject(error);
    }
);

export default api; 