import React, {useEffect, useState} from 'react';
import classes from "./Basket.module.css";
import BasketItem from "./BasketItem";

const BasketItems = (basket) => {


    const [startPrice, setStartPrice] = useState(0);

    useEffect( ()  => {
        setStartPrice(0);
        basket.props.forEach(bas => {
            setStartPrice(s => s + parseInt(bas.price) * bas.basketCount);
        })

        const handlePriceUpdate = () => {
            setStartPrice(0);
            basket.props.forEach(bas => {
                setStartPrice(s => s + parseInt(bas.price) * bas.basketCount);
            })
        }
        window.addEventListener('priceUpdated', handlePriceUpdate);

        return () => {
            window.removeEventListener('priceUpdated', handlePriceUpdate);
        };
    }, [basket.props]);


    return (
        <div className={classes.page}>
            <div className={classes.items}>
                {basket.props.map((item, index) =>
                    <BasketItem key={index} props={item} />
                )}
            </div>
            <div className={classes.result__quantity}>
                <div className={classes.box}>
                    <div className={classes.final__price__div}>
                        <label className={classes.label__text}>ИТОГО</label>
                        <label className={classes.final__price}>{startPrice} ₽</label>
                    </div>
                    <button className={classes.button}>Перейти к оформлению</button>
                </div>
            </div>
        </div>
    );
};

export default BasketItems;