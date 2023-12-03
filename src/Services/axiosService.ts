import axios from 'axios';
import { baseURL } from '../Constants';

const axiosService = axios.create({ baseURL });

axiosService.interceptors.request.use(config => {
    const key_api =
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzUyMGJiODI1N2RlNjc3MGY5ZDEyMTBkOWYyNTM3MyIsInN1YiI6IjY1NGE2NTU2ZmQ0ZjgwMDExZWQyYmQ4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.amOTNhlkaDB9e6ZllKYFNFmb8sS1DNfAw6BeYA4SlFM';
    config.headers.Authorization = `Bearer ${key_api}`;
    return config;
});

export { axiosService };
