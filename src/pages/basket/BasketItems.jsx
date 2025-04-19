import React from 'react';
import classes from "./Basket.module.css";
import BasketItem from "./BasketItem";

const BasketItems = (basket) => {
    return (
        <div className={classes.page}>
            <div className={classes.items}>
                {basket.props.map((item) =>
                    <BasketItem key={item.id} props={item} />
                )}
            </div>
            <div className={classes.result__quantity}>
                <div className={classes.box}>
                    <div className={classes.final__price__div}>
                        <label className={classes.label__text}>ИТОГО</label>
                        <label className={classes.item__price}>40872</label>
                    </div>
                    <button className={classes.button}>Перейти к оформлению</button>
                </div>
            </div>
        </div>
    );
};

export default BasketItems;