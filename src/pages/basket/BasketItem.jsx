import React, {useState} from 'react';
import classes from "./Basket.module.css";
import {ReactComponent as PlusSvg} from "./plus.svg";
import {ReactComponent as MinusSvg} from "./minus.svg";
import {ReactComponent as RemoveSvg} from "./delete.svg";

const BasketItem = (item) => {
    /*const removeItemFromCart = () => {
        /!*let count = parseInt(sessionStorage.getItem('basketCount'));
        if (count > 0) {
            count -= 1;
        }
        sessionStorage.setItem('basketCount', count.toString());*!/

        // Обновляем состояние в Navbar
        const event = new Event('basketUpdated');
        window.dispatchEvent(event);
    }*/

    const [count, setCount] = useState(item.props.basketCount);

    function handlePlus() {
        item.props.basketCount += 1;
        setCount(item.props.basketCount);
        const basket = JSON.parse(sessionStorage.getItem('basketProducts')) || [];
        basket.forEach(bas => {
            if (bas.id === item.props.id) {
                bas.basketCount = item.props.basketCount;
            }
        })
        sessionStorage.setItem('basketProducts', JSON.stringify(basket));

        const event = new Event('basketUpdated');
        const event2 = new Event('priceUpdated');
        window.dispatchEvent(event);
        window.dispatchEvent(event2);
    }

    function handleMinus() {
        if (item.props.basketCount > 1) {
            item.props.basketCount -= 1;
            setCount(item.props.basketCount);
            const basket = JSON.parse(sessionStorage.getItem('basketProducts')) || [];
            basket.forEach(bas => {
                if (bas.id === item.props.id) {
                    bas.basketCount = item.props.basketCount;
                }
            })
            sessionStorage.setItem('basketProducts', JSON.stringify(basket));

            const event = new Event('basketUpdated');
            const event2 = new Event('priceUpdated');
            window.dispatchEvent(event);
            window.dispatchEvent(event2);
        }

    }

    return (
        <div className={classes.item}>
            <div className={classes.img__container}>
                <img className={classes.img} src={item.props.img} alt={item.props.title}/>
                <div className={classes.item__counter__div}>
                    <MinusSvg className={classes.item__svg} onClick={handleMinus}></MinusSvg>
                    <label className={classes.item__counter__text}>{count}</label>
                    <PlusSvg className={classes.item__svg} onClick={handlePlus}></PlusSvg>
                </div>
            </div>
            <div className={classes.item__info__div}>
                <label className={classes.item__name}>{item.props.title}</label>
                <label className={classes.item__price}>{item.props.price} ₽</label>

            </div>
            <div className={classes.item__price__remove__div}>
                <RemoveSvg className={classes.item__svg}></RemoveSvg>
                <label className={classes.item__price} style={{color: "black"}}>{item.props.price * count} ₽</label>
            </div>
        </div>
    );
};

export default BasketItem;