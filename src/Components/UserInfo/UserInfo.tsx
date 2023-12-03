import css from '../Header/Header.module.css';

const UserInfo = () => {
    return (
        <div className={css.round}>
            <p>Danylo Kotur</p>
            <button>Log Out</button>
        </div>
    );
};

export { UserInfo };
