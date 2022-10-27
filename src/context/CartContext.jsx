import { createContext, useState } from 'react';

export const CartContext = createContext();

const Provider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        const producto = { ...item, cantidad };
        if (isInCart(producto.id)) {
            sumarCantidad(producto);
        } else {
            setCart([...cart, producto]);
        }
    };

    const sumarCantidad = (prodAgregado) => {
        const carritoActualizado = cart.map((prodDelCart) => {
            if (prodDelCart.id === prodAgregado.id) {
                const prodActualizado = {
                    ...prodDelCart,
                    cantidad: prodAgregado.cantidad,
                };
                return prodActualizado;
            } else {
                return prodDelCart;
            }
        });

        setCart(carritoActualizado);
    };

    const isInCart = (id) => cart.some((prod) => prod.id === id);

    const deleteAll = () => setCart([]);

    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(prodFiltrados);
    };

    const totalUnidades = () => {
        let acc = 0;
        const copia = [...cart];
        copia.forEach((prod) => {
            acc = acc + prod.cantidad;
        });
        return acc;
    };

    const total = () => {
        return 1000;
    };

    const getProductQuantity = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.cantidad;
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                total,
                totalUnidades,
                addToCart,
                deleteAll,
                deleteOne,
                getProductQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default Provider;
