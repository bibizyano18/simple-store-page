import React, {useEffect, /*useState*/} from 'react';
import classes from './Store.module.css';

//import {data} from "react-router-dom";

const Store = () => {
    //const [data, setData] = useState([]);

    useEffect(() => {
        // Устанавливаем начальное значение при монтировании компонента
        if (sessionStorage.getItem('basketCount')) {
            sessionStorage.setItem('basketCount', '0');
        }
        /*fetch('/products.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));*/
    }, []);
    /*data.map((item) => {
        console.log(item.title);
    })*/
    const addItemToCart = () => {
        let count = parseInt(sessionStorage.getItem('basketCount')) || 0;
        count += 1;
        sessionStorage.setItem('basketCount', count.toString());

        // Обновляем состояние в Navbar
        const event = new Event('basketUpdated');
        window.dispatchEvent(event);
    };

    return (

            <div className={classes.main}>
                <label className={classes.label__text}>Наушники</label>
                <div className={classes.items}>
                    <div className={classes.item}>
                        <img className={classes.img} src="/assets/airpods.png" alt="Airpods"></img>
                        <div className={classes.item__info}>
                            <label className={classes.item__name_text}>Airpods</label>
                            <label className={classes.item__price}>4990</label>
                            <button className={classes.item__buy_button} onClick={addItemToCart}>Купить</button>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <img className={classes.img} src="/assets/airpods2.png" alt="Airpods"></img>
                        <button onClick={addItemToCart}>Добавить товар</button>
                        <label className={classes.label__text}>Airpods</label>
                    </div>
                    <div className={classes.item}>
                        <img className={classes.img} src="/assets/airpods3.png" alt="Airpods"></img>
                        <button onClick={addItemToCart}>Добавить товар</button>
                        <label className={classes.label__text}>Airpods</label>
                    </div>
                </div>
                <div className={classes.items}>
                    <button className={classes.item} onClick={addItemToCart}>Добавить товар</button>
                    <button className={classes.item} onClick={addItemToCart}>Добавить товар</button>
                    <button className={classes.item} onClick={addItemToCart}>Добавить товар</button>
                </div>
            </div>

    );
};

export default Store;