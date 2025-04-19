import React, {useState} from 'react';
import classes from "./Basket.module.css";
import BasketItem from "./BasketItem";

const BasketItems = (basket) => {

    const [counter, setCounter] = useState(0);

    let startCounter = 0;

    basket.props.forEach(item => {
        startCounter += parseInt(item.price);
    })

    function editPrice(price) {
        setCounter(counter + price);
    }

    return (
        <div className={classes.page}>
            <div className={classes.items}>
                {basket.props.map((item) =>
                    <BasketItem key={item.id} props={item} editPrice={editPrice} />
                )}
            </div>
            <div className={classes.result__quantity}>
                <div className={classes.box}>
                    <div className={classes.final__price__div}>
                        <label className={classes.label__text}>ИТОГО</label>
                        <label className={classes.final__price}>{startCounter + counter} ₽</label>
                    </div>
                    <button className={classes.button}>Перейти к оформлению</button>
                </div>
            </div>
        </div>
    );
};

export default BasketItems;