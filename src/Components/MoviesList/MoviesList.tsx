import { StarsRating } from '../Stars';
import { useNavigate } from 'react-router-dom';
import css from '../Header/Header.module.css';
const basePosterUrl = `https://image.tmdb.org/t/p/original`;

const MoviesList = ({ movie: { id, title, vote_average, release_date, poster_path } }) => {
    const navigate = useNavigate();
    const toMovieInfo = () => {
        navigate(`/movie/${id}`, { state: id });
    };

    return (
        <div className={css.item} onClick={toMovieInfo}>
            {poster_path && <img src={`${basePosterUrl}/${poster_path}`} alt={title} />}
            <h3>{title}</h3>
            <StarsRating vote_average={vote_average} />
            <p>{release_date}</p>
        </div>
    );
};

export { MoviesList };
