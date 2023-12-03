import React, { useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState, movieActions, useAppDispatch } from '../../redux';
import css from '../../Components/Header/Header.module.css';
import { MoviesList } from '../../Components/MoviesList';
const MoviesListPage = () => {
    const { genre } = useParams();

    const { movies, currentPage, total_pages } = useSelector((state: RootState) => state.movies);
    const [query, setQuery] = useSearchParams({ page: '1' });
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(
            movieActions.getAll({
                page: query.get('page'),
                with_genres: genre,
            })
        );
    }, [query]);

    const nextPage = () => {
        const nextPage = +currentPage + 1;
        setQuery({ page: `${nextPage}` });
    };
    const prevPage = () => {
        const prevPage = +query.get('page') - 1;
        setQuery({ page: `${prevPage}` });
    };

    return (
        <div>
            <div className={css.buttons}>
                <button disabled={currentPage <= 1} onClick={prevPage}>
                    Previous
                </button>
                <p>Now you are at the page {currentPage}</p>
                <button disabled={currentPage >= total_pages} onClick={nextPage}>
                    Next
                </button>
            </div>
            <div className={css.product_card}>
                {movies && movies.map(movie => <MoviesList key={movie.id} movie={movie} />)}
            </div>
            <div className={css.buttons}>
                <button disabled={currentPage <= 1} onClick={prevPage}>
                    Previous
                </button>
                <p>Now you are at the page {currentPage}</p>
                <button disabled={currentPage >= total_pages} onClick={nextPage}>
                    Next
                </button>
            </div>
        </div>
    );
};
export { MoviesListPage };
