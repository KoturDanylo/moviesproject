import { Link } from 'react-router-dom';
import css from '../Header/Header.module.css';

import { useEffect } from 'react';

const GenreBadge = () => {
    useEffect(() => {
    }, []);
    return (
        <div>
            <div className={css.geners}>
                <ul>
                    <h2>Choose genre</h2>

                    <li>
                        <label>
                            <Link to={'/movies/28'}>Action</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/12'}>Adventure</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/16'}>Animation</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/35'}>Comedy</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/80'}>Crime</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/99'}>Documentary</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/18'}>Drama</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/10751'}> Family</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/14'}>Fantasy</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/36'}>History</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/27'}>Horror</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/10402'}>Music</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/9648'}>Mystery</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/10749'}>Romance</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/878'}>Science Fiction</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/10770'}>TV Movie</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/53'}>Thriller</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/10752'}>War</Link>
                        </label>
                    </li>
                    <li>
                        <label>
                            <Link to={'/movies/37'}>Western</Link>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export { GenreBadge };