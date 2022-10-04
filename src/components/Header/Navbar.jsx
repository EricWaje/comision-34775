import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav>
            <h1>React</h1>
            <ul>
                <li>Remeras</li>
                <li>Camisas</li>
                <li>Gorras</li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;
