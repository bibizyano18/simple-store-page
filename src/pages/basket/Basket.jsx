import React from 'react';
import classes from './Basket.module.css';
import BasketItems from "./BasketItems";

const Basket = () => {

    const basket = JSON.parse(sessionStorage.getItem('basketProducts')) || [];

    return (
        <div className={classes.main}>
            <label className={classes.label__text}>Корзина</label>
            {basket.length === 0 &&
                <div className={classes.empty__div}>
                    <label className={classes.empty__text}>В корзине пока пусто</label>
                    <label className={classes.empty__text} style={{fontSize: 20, marginTop: 40, marginBottom: 310}}>Загляните на главную — собрали там товары, которые могут вам понравиться</label>
                </div>}
            {basket.length > 0 && <BasketItems props={basket} />}
        </div>
    );
};

export default Basket;