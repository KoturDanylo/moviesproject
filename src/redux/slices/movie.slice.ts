import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { movieService } from '../../Services';

const initialState = {
    currentPage: null,
    total_pages: null,
    movies: null,
    genres: [],
    details: {},
    genresOfOneMovie: '',
    genresArrForSearch: [],
};

const getDetails = createAsyncThunk('moviesSLice/getDetails', async ({ id }: { id: string }) => {
    const { data } = await movieService.details(id);
    return data;
});

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({ page, with_genres }: { page: string; with_genres: string }) => {
        const { data } = await movieService.getAllMovies(page, with_genres);
        return data;
    }
);

const getMoviesSearch = createAsyncThunk(
    'moviesSlice/searchMovies',
    async ({ query }: { query: string }) => {
        const { data } = await movieService.searchMovies(query);
        return data;
    }
);

const getGenres = createAsyncThunk('moviesSlice/getGenres', async () => {
    const { data } = await movieService.getGenres();
    return data;
});

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const { page, results } = action.payload;
                state.currentPage = page;
                state.movies = results;
                state.total_pages = action.payload.total_pages;
            })
            .addCase(getMoviesSearch.fulfilled, (state, action) => {
                const { page, results } = action.payload;
                state.currentPage = page;
                state.movies = results;
                state.total_pages = action.payload.total_pages;
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            })
            .addCase(getDetails.fulfilled, (state, action) => {
                state.details = action.payload;
                const { genres } = action.payload;
                state.details = action.payload;
                const genresArr = genres.map((value: { name: any; }) => value.name);
                state.genresOfOneMovie = genresArr.toString().replaceAll(',', ',').toLowerCase();
            });
    },
});

const { reducer: movieReducer } = movieSlice;

const movieActions = {
    getAll,
    getDetails,
    getGenres,
    getMoviesSearch,
};

export { movieReducer, movieActions };
