import React, { useState } from 'react';

import css from '../Header/Header.module.css';
const Switch = () => {
    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => {
        setIsToggled(!isToggled);
        if (isToggled) {
            document.body.style.color = 'black';
            document.body.style.background = 'white';
        } else {
            document.body.style.background = '#336699';
            document.body.style.color = 'white';
        }
    };

    return (
        <div className={css.toggle_switch}>
            <div className={css.dark_theme}> Dark Theme</div>
            <label className={css.toggle_switch}>
                <input type="checkbox" checked={isToggled} onChange={onToggle} />
                <span className={css.switch} />
            </label>
        </div>
    );
};

export { Switch };