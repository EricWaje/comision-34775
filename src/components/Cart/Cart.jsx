import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, deleteAll, deleteOne } = useContext(CartContext);

    if (cart.length === 0) {
        return <h1>Aún no hay productos</h1>;
    }

    return (
        <div className="cart-container">
            {cart.map((prod) => (
                <div className="cart-detail" key={prod.id}>
                    <img src={prod.img} alt={prod.title} width="80px" />
                    <div className="cart-detail-info">
                        <h2>{prod.title}</h2>
                        <h3>Cantidad: {prod.cantidad}</h3>
                        <h3>Precio: ${prod.price}.-</h3>
                        <h4>Subtotal: ${prod.price * prod.cantidad}.-</h4>
                    </div>

                    <AiFillDelete
                        size={25}
                        color="red"
                        onClick={() => deleteOne(prod.id)}
                    />
                </div>
            ))}
            <h2>Total: $0</h2>
            <button onClick={deleteAll}>Eliminar todo el carrito</button>
            <Link
                style={{
                    border: '2px solid green',
                    padding: '4px 6px',
                    borderRadius: '8px',
                }}
                to="/checkout"
            >
                Checkout
            </Link>
        </div>
    );
};

export default Cart;
