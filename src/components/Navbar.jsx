import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <header className="navbar-brand"></header>
            <div className="navbar__logo">
                <Link to="/store">QPICK</Link>
            </div>
            <div className="navbar__buttons">
                <Link to="/basket">корзина</Link>
            </div>

        </div>
    );
};

export default Navbar;