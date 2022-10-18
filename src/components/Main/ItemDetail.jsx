import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ item }) => {
    const [unidades, setUnidades] = useState(0);

    const { addToCart } = useContext(CartContext);

    const prueba = (numero) => {
        //console.log(`añadiste ${numero}`);
        setUnidades(numero);
        //item, numero
        addToCart(item, numero);
        toast.success(`Agregaste ${numero} unidades`);
    };

    return (
        /* className={unidades === 0 ? "container-detail" : 'otra'} */
        <div className="container-detail">
            <ToastContainer />
            <img src={item.img} alt="" />
            <div>
                <h2>{item.title}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    rem, consequatur accusamus dicta incidunt sapiente cum ipsa,
                    ducimus
                </p>

                {
                    <h2 style={{ color: unidades === 0 ? 'red' : 'blue' }}>
                        {unidades === 0
                            ? `Hay ${unidades} unidades`
                            : `Ya agregaste`}
                    </h2>
                }

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
