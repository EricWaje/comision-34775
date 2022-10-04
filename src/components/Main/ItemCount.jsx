import React, { useState } from 'react';

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const restar = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    return (
        <div className="container-count">
            <div className="count-btn">
                <button onClick={sumar}>+</button>
                <p>{count}</p>
                <button onClick={restar}>-</button>
            </div>
            <button className="add-btn">Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
