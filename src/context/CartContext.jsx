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
                    //Opción 2 para pisar la cantidad (habría que hacer un paso más luego para poder mostrarle al user la cantidad que ya tiene en el carrito de ese producto)
                    //cantidad: prodAgregado.cantidad
                };
                return prodActualizado;
            } else {
                return prodDelCart;
            }
        });

        setCart(carritoActualizado);
    };

    //MISMA FUNCION QUE LA DE ARRIBA PERO CON TERNARIO

    // const sumarCantidad2 = (prodAgregado) => {
    //     setCart(cart.map((prodDelCart) => {
    //         prodDelCart.id === prodAgregado.id
    //             ? { ...prodDelCart, cantidad: prodAgregado.cantidad }
    //             : prodDelCart;
    //     }));
    // };

    const isInCart = (id) => cart.some((prod) => prod.id === id);

    const deleteAll = () => setCart([]);

    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(prodFiltrados);
    };

    //sumar cantidad total de unidades
    //for, forEach, for of, reduce
    const totalUnidades = () => {
        let acc = 0;
        const copia = [...cart];
        copia.forEach((prod) => {
            acc = acc + prod.cantidad;
        });
        return acc;
    };

    //sumar precio total
    const total = () => {
        return 1000;
    };
    //for, forEach, for of, reduce

    //console.log(cart);

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
