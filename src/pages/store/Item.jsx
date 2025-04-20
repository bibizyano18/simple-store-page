import React, {useEffect} from 'react';
import classes from "./Store.module.css";
import { ReactComponent as RatingSvg } from './rating.svg';
const Item = ({product}) => {

    useEffect(() => {
        if (sessionStorage.getItem('basketProducts')) {
            const basketProducts = [];
            sessionStorage.setItem('basketProducts', JSON.stringify(basketProducts));
        }
    }, []);

    const addItemToCart = () => {

        const basket = JSON.parse(sessionStorage.getItem('basketProducts')) || [];
        basket.push({...product, basketCount: 1});
        sessionStorage.setItem('basketProducts', JSON.stringify(basket));

        // обновляем состояние в Navbar
        const event = new Event('basketUpdated');
        window.dispatchEvent(event);
    };

    return (
        <div className={classes.item}>
            <img className={classes.img} src={product.img} alt={product.title}></img>
            <div className={classes.item__info}>
                <label className={classes.item__name__text}>{product.title}</label>
                <label className={classes.item__price}>{product.price} ₽</label>
                <button className={classes.item__buy_button} onClick={addItemToCart}>Купить</button>
                <RatingSvg className={classes.item__rating__svg}></RatingSvg>
                <label className={classes.item__rating}>{product.rating}</label>
            </div>
        </div>
    );
};

export default Item;