import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Link to="/store" className="navbar__text">QPICK</Link>
            </div>
            <div className="navbar__buttons">
                <Link to="/basket" className="navbar__text">корзина</Link>
            </div>

        </div>
    );
};

export default Navbar;