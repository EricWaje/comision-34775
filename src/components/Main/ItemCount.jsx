import React, { useState } from 'react';

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    const { prueba } = props;

    //console.log(props);

    const sumar = () => {
        count < props.stock && setCount(count + 1);
    };

    const restar = () => {
        count > props.initial && setCount(count - 1);
    };

    const add = () => {
        prueba(count);
    };

    return (
        <div className="container-count">
            <div className="count-btn">
                <button disabled={count === props.stock} onClick={sumar}>
                    +
                </button>
                <p>{count}</p>
                <button disabled={count === props.initial} onClick={restar}>
                    -
                </button>
            </div>
            <button onClick={add} className="add-btn">
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;

// const foo = (a,b) =>{

// }

// foo(10,20)

// const Foo = (a,b) =>{

// }

// foo(10,20)
