import React from 'react';

import css from "../Header/Header.module.css"
import twitter_logo from "../images/twitter.svg"
import facebook_logo from "../images/facebook.svg"
import youtube_logo from "../images/youtube.svg"
import instagram_logo from "../images/inst.svg"


const Footer = () => {
    return (
        <div className={css.main_foot}>
            <div className={css.footer}>
                <div className={css.column}>
                    <h3>Other information</h3>
                    <ul className={css.listed_items}>
                        <li className={css.listed_item}>
                            <p>Contact</p>
                        </li>
                        <li className={css.listed_item}>
                            <p>Media centre</p>
                        </li>
                        <li className={css.listed_item}>
                            <p>Jobs</p>
                        </li>
                        <li className={css.listed_item}>
                            <p>Sitemap</p>
                        </li>
                        <li className={css.listed_item}>
                            <p>Privacy</p>
                        </li>
                    </ul>
                </div>
                <div className={css.column}>
                    <h3>Connect with us</h3>
                    <ul className={css.listed_items}>
                        <li className={css.listed_item}>
                            <p>
                                <img className={css.img_class} src={twitter_logo} alt={"twitter_logo"}/>Twitter</p>
                        </li>
                        <li className={css.listed_item}>
                            <p>
                                <img className={css.img_class} src={facebook_logo} alt={"facebook_logo"}/> Facebook</p>
                        </li>
                        <li className={css.listed_item}>
                            <p>
                                <img className={css.img_class} src={youtube_logo} alt={"youtube_logo"}/> YouTube</p>
                        </li>
                        <li className={css.listed_item}>
                            <p>
                                <img className={css.img_class} src={instagram_logo} alt={"instagram_logo"}/> Instagram</p>
                        </li>
                    </ul>
                </div>
                <div className={css.column}>
                    <h3>Help Us</h3>
                    <ul className={css.listed_items}>
                        <li className={css.listed_item}>
                            <p>Поставити добру оцінку</p>
                        </li>
                        <li className={css.listed_item}>
                            <p>Порекомендувати айті компанії</p>
                        </li>
                        <li className={css.listed_item}>
                            <p>Залишити відгук</p>
                        </li>
                        
                    </ul>
                </div>
                <div className={css.column}>
                    <h3>Press</h3>
                    <ul className={css.listed_items}>
                        <li className={css.listed_item}><p>Media Centre</p></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export {Footer};