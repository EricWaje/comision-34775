import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cart, deleteAll } = useContext(CartContext);

    return (
        <div>
            {cart.map((prod) => (
                <div
                    key={prod.id}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px',
                        margin: '10px',
                    }}
                >
                    <img src={prod.img} alt={prod.title} width="80px" />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h2>{prod.title}</h2>
                        <h3 style={{ margin: '0px 10px' }}>$ {prod.price}.-</h3>
                        <h3>Cantidad: {prod.cantidad}</h3>
                        <h3>Subtotal: ${prod.price * prod.cantidad}.-</h3>
                    </div>
                    <button>Delete</button>
                </div>
            ))}
            <h2>Total: $0</h2>
            <button onClick={deleteAll}>Eliminar todo el carrito</button>
        </div>
    );
};

export default Cart;
