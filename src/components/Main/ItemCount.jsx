import React, { useState } from 'react';

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);

    // const initial = props.initial
    // const stock = props.stock;
    // const {initial, stock} = props

    //console.log(props);

    // console.log(useState(100));

    const sumar = () => {
        // if (count < props.stock) {
        //     setCount(count + 1);
        // }

        count < props.stock && setCount(count + 1);
        // count < props.stock
        //     ? setCount(count + 1)
        //     : alert('Máximo stock alcanzado');
    };

    const restar = () => {
        count > props.initial && setCount(count - 1);
        //setCount(count - 1);
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
            <button className="add-btn">Agregar al carrito</button>
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
