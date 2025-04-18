import React from 'react';
import classes from './Store.module.css';
import Item from "./Item";

const Items = (products) => {

    return (
        <div className={classes.items}>
            {products.props.map((product, index) =>
                <Item key = {index} product={product} />
            )}
        </div>

    );
};

export default Items;