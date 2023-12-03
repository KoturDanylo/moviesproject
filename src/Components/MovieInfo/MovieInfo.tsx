import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { StarsRating } from '../Stars';

import css from '../Header/Header.module.css';
import { imdbImage } from '../../Constants/';
import { RootState, useAppDispatch } from '../../redux';
import { movieActions } from '../../redux';

type Movie = {
    title: string;
    overview: string;
    runtime: string;
    release_date: string;
    budget: string;
    original_language: string;
    vote_average: string;
    imdb_id: string;
    genres: [{ name: string }];
    production_countries: [{ name: string }];
    poster_path: string;
};
const basePosterUrl = `https://image.tmdb.org/t/p/original`;

const MovieInfo = () => {
    const { id } = useParams();

    const dispatch = useAppDispatch();
    const { details: movieDetails } = useSelector((state: RootState) => state.movies);

    useEffect(() => {
        if (id) {
            dispatch(movieActions.getDetails({ id }));
        }
    });

    const {
        title,
        overview,
        runtime,
        release_date,
        budget,
        original_language,
        vote_average,
        imdb_id,
        genres,
        production_countries,
        poster_path,
    } = movieDetails as Movie;

    const countryObject = () => {
        if (production_countries) {
            return production_countries?.map(value => value.name);
        } else {
            return 'unknown';
        }
    };

    const clearCountry = countryObject().toString().replace(',', ',');

    const imdbURL = `https://www.imdb.com/title/${imdb_id}/`;
    const _url = `${basePosterUrl}/${poster_path}`;

    const genresOfOneMovie = genres?.map(value => value?.name);
    return (
        <div className={css.bigger_container}>
            <div className={css.product_card_details}>
                {poster_path && <img src={_url} alt={title} />}

                <div>
                    <h2>{title}</h2>
                    <div>
                        <h4>Overview:</h4>
                        <p>{overview}</p>
                    </div>
                    <div>
                        Genres: <span className={css.text}>{genresOfOneMovie}</span>
                    </div>
                    {clearCountry && (
                        <p>
                            {' '}
                            Сountry : <span className={css.text}>{clearCountry}</span>{' '}
                        </p>
                    )}
                    <p>
                        Length <span className={css.text}>{runtime} min</span>
                    </p>
                    <p>
                        Released on <span className={css.text}> {release_date} </span>
                    </p>
                    {Number(budget) !== 0 && (
                        <p>
                            Budget : <span className={css.text}> {budget}</span>
                        </p>
                    )}
                    <p>
                        original_language: <span className={css.text}>{original_language} </span>
                    </p>
                </div>
            </div>
            <div className={css.image}>
                <StarsRating vote_average={vote_average} />{' '}
                <a href={imdbURL}>{poster_path && <img src={imdbImage} alt="imdb logo" />}</a>
            </div>
        </div>
    );
};

export { MovieInfo };
