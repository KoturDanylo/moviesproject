import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { Switch } from '../Switch';
import { UserInfo } from '../UserInfo';
import {TheMovieDb} from "../TheMovieDB";

const reset = () => {};

const Header = () => {
    return (
        <div className={css.header}>
            <TheMovieDb/>

            <NavLink to={'/movies'} onClick={() => reset()}>
                Films store
            </NavLink>

            <NavLink to={'/genres'} onClick={() => reset()}>
                Genres
            </NavLink>

            <NavLink to={'/search'} onClick={() => reset()}>
                Search
            </NavLink>

            <Switch />
            <UserInfo />
        </div>
    );
};
export { Header };
