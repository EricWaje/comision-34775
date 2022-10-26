import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { totalUnidades } = useContext(CartContext);

    const total = totalUnidades();

    return (
        <div className="widget-container">
            <AiOutlineShoppingCart size={20} />
            {/* algún condicional para que si la cantidad es 0 no me muestre el número */}
            <span>{total}</span>
        </div>
    );
};

export default CartWidget;
