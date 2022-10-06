import React from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <h1>React</h1>
            </Link>
            <ul>
                <NavLink to="/category/remeras">Remeras</NavLink>
                <NavLink to="/category/camisas">Camisas</NavLink>
                <NavLink to="/category/gorras">Gorras</NavLink>
            </ul>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default Navbar;
