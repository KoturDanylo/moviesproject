import React from 'react';

import css from '../../Components/Header/Header.module.css';
import { notFoundPageImage } from '../../Constants';

const NotFoundPage = () => {
    return (
        <div className={css.not_found}>
            <p>How did you come there? Go back to the real url!</p>
            <img src={notFoundPageImage} alt="Page does not exist" />
        </div>
    );
};

export { NotFoundPage };
