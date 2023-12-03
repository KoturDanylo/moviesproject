import { useSelector } from 'react-redux';

import { MoviesList } from '../../Components/MoviesList';
import css from '../../Components/Header/Header.module.css';
import { RootState, movieActions, useAppDispatch } from '../../redux';
import React from "react";

const SearchPage = () => {
    const { movies } = useSelector((state: RootState) => state.movies);

    const dispatch = useAppDispatch();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(movieActions.getMoviesSearch({ query: event.target.value }));
    };

    return (
        <div>
            <div>
                <input
                    className={css.search_input}
                    onChange={onChange}
                    type="text"
                    placeholder="Search"
                />
            </div>

            <div>
                <div className={css.product_card}>
                    {movies && movies.map(movie => <MoviesList key={movie.id} movie={movie} />)}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
