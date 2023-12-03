import { axiosService } from './axiosService';
import { urls } from '../Constants';

const config = {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzUyMGJiODI1N2RlNjc3MGY5ZDEyMTBkOWYyNTM3MyIsInN1YiI6IjY1NGE2NTU2ZmQ0ZjgwMDExZWQyYmQ4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.amOTNhlkaDB9e6ZllKYFNFmb8sS1DNfAw6BeYA4SlFM`,
    },
};

const movieService = {
    getAllMovies: (page = '1', with_genres) =>
        axiosService.get(urls.movie, { params: { page, with_genres }, ...config }),
    getGenres: () => axiosService.get(urls.genres, config),
    details: id => axiosService.get(`${urls.details}/${id}`, config),
    searchMovies: q => axiosService.get(urls.search, { params: { query: q }, ...config }),
};

export { movieService };
