import React, {useEffect} from 'react';

const Store = () => {
    useEffect(() => {
        // Устанавливаем начальное значение при монтировании компонента
        if (sessionStorage.getItem('basketCount')) {
            sessionStorage.setItem('basketCount', '0');
        }
    }, []);

    const addItemToCart = () => {
        let count = parseInt(sessionStorage.getItem('basketCount')) || 0;
        count += 1;
        sessionStorage.setItem('basketCount', count.toString());

        // Обновляем состояние в Navbar
        const event = new Event('basketUpdated');
        window.dispatchEvent(event);
    };

    return (
        <div>

            <button onClick={addItemToCart}>Добавить товар</button>
        </div>
    );
};

export default Store;