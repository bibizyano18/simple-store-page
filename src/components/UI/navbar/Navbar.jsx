import React, {useEffect, useState} from 'react';
import classes from "./Navbar.module.css";
import { ReactComponent as BasketSvg } from './basket.svg';
import { ReactComponent as HeartSvg } from './heart.svg';
import {Link} from "react-router-dom";

const Navbar = () => {
    const [basketCount, setBasketCount] = useState(0);
    function logoClick() {
        setBasketCount(0);
    }
    useEffect(() => {
        // Обновляем состояние при монтировании компонента
        const basket = JSON.parse(sessionStorage.getItem('basketProducts')) || [];
        if (basket) {
            setBasketCount(0);
            basket.forEach((item) => {
                setBasketCount(b => b + item.basketCount);
            })
        }
        // Обновляем состояние при изменении данных в sessionStorage
        const handleBasketUpdate = () => {
            const basket = JSON.parse(sessionStorage.getItem('basketProducts')) || [];
            setBasketCount(0);
            basket.forEach((item) => {
                setBasketCount(b => b + item.basketCount);
            })

        };

        window.addEventListener('basketUpdated', handleBasketUpdate);

        return () => {
            window.removeEventListener('basketUpdated', handleBasketUpdate);
        };
    }, []);

    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__logo}>
                <Link to="/store" className={classes.navbar__text} onClick={logoClick}>QPICK</Link>
            </div>
            <div className={classes.navbar__buttons}>
                <div className={classes.heart__icon}>
                    <HeartSvg />
                </div>
                <Link to="/basket" className={classes.cart__icon__link}>
                    <div className={classes.cart__icon}>
                        <BasketSvg />
                        {basketCount > 0 && <span className={classes.cart__count}>{basketCount}</span>}
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;