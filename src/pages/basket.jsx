import React from 'react';

const Basket = () => {

    const removeItemFromCart = () => {
        let count = parseInt(sessionStorage.getItem('basketCount'));
        if (count > 0) {
            count -= 1;
        }
        sessionStorage.setItem('basketCount', count.toString());

        // Обновляем состояние в Navbar
        const event = new Event('basketUpdated');
        window.dispatchEvent(event);
    }

    return (
        <div>
            <button onClick={removeItemFromCart}>Удалить товар</button>
        </div>
    );
};

export default Basket;