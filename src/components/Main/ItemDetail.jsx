import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const [unidades, setUnidades] = useState(0);

    const { addToCart } = useContext(CartContext);

    const prueba = (numero) => {
        //console.log(`añadiste ${numero}`);
        setUnidades(numero);
        //item, numero
        addToCart(item, numero);
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

                {unidades === 0 ? (
                    <ItemCount prueba={prueba} stock={item.stock} initial={1} />
                ) : (
                    <Link to="/cart">Ir al carrito</Link>
                )}
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
