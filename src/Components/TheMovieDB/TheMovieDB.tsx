import Moviedb_logo from "../images/Moviedb.svg"
import css from "../Header/Header.module.css";

const TheMovieDb = () => {
    return (
        <div>
            <img className={css.imgdb_class} src={Moviedb_logo} alt={'Movie db'}/>
        </div>
    );
};

export {TheMovieDb};