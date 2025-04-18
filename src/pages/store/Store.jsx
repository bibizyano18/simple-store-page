import React, {useEffect, useState} from 'react';
import classes from './Store.module.css';
import productsData from '../../components/headphones.json'
import Items from "./Items";

const Store = () => {
    const [products, setProducts] = useState([]);
    const [products_wireless, setProductsWireless] = useState([]);

    useEffect(() => {
        // Извлекаем массив products из объекта productsData
        if (productsData && productsData.products && productsData.products__wireless) {
            setProducts(productsData.products);
            setProductsWireless(productsData.products__wireless);
        }
    }, []);
    return (
        <div className={classes.main}>
            <label className={classes.label__text}>Наушники</label>
            <Items props={products} />
            <label className={classes.label__text}>Беспроводные наушники</label>
            <Items props={products_wireless} />
        </div>
    );
};

export default Store;