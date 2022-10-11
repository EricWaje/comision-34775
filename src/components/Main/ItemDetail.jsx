import { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const [show, setShow] = useState(true);
    /* const [unidades, setUnidades] = useState(0); */

    const prueba = (numero) => {
        console.log(`añadiste ${numero}`);
        //setUnidades(numero);
        setShow(false);
    };

    return (
        <div className="container-detail">
            <img src={item.img} alt="" />
            <div>
                <h2>{item.title}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    rem, consequatur accusamus dicta incidunt sapiente cum ipsa,
                    ducimus
                </p>
                <ItemCount prueba={prueba} stock={10} initial={1} />
                {show ? (
                    <p>Este es el item count</p>
                ) : (
                    <button>Ir al carrito</button>
                )}
                {/* {condicion
                    ? 
                    : 
                } */}
            </div>
        </div>
    );
};

export default ItemDetail;

// //A
// const foo = (a) => {

// }

// //B
// foo(200)
