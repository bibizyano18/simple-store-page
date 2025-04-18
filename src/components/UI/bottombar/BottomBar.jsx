import React from 'react';
import classes from "./BottomBar.module.css";
import { ReactComponent as LanguageSVG } from './RU.svg';
import { ReactComponent as VkSVG } from './VK.svg';
import { ReactComponent as TgSVG } from './Telegram.svg';
import { ReactComponent as WhatsappSVG } from './Whatsapp.svg';
import {Link} from "react-router-dom";

const BottomBar = () => {
    return (
        <div className={classes.bottom__bar}>
            <Link to="/store" className={classes.logo__text}>QPICK</Link>
            <div className={classes.links__div}>
                <Link to="/" className={classes.links__text}>Избранное</Link>
                <Link to="/basket" className={classes.links__text}>Корзина</Link>
                <Link to="/" className={classes.links__text}>Контакты</Link>
            </div>
            <div className={classes.condition__div}>
                <Link to="/" className={classes.links__text}>Условия сервиса</Link>
                <div className={classes.languages__div}>
                    <LanguageSVG className={classes.svg}></LanguageSVG>
                    <label className={classes.languages__rus}>Рус</label>
                    <label className={classes.languages__eng}>Eng</label>
                </div>
            </div>
            <div className={classes.social__networks__div}>
                <VkSVG className={classes.svg}></VkSVG>
                <TgSVG className={classes.svg}></TgSVG>
                <WhatsappSVG className={classes.svg}></WhatsappSVG>
            </div>
        </div>
    );
};

export default BottomBar;