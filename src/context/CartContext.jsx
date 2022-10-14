import { createContext, useState } from 'react';

//1. Creamos el contexto y lo exportamos para luego utilizarlo en algún componente
export const CartContext = createContext();

//2. Creamos un componente proveedor que nos va a servir para envolver el contexto, en este componente vamos a poder tener funciones, variables, estados, etc.

//3. Importamos el componente proveedor en algún punto de nuestra aplicación.

//4. Hacemos uso de la prop children para poder visualizar todos nuestros componentes
const Provider = ({ children }) => {
    //5. Creamos algún estado en el caso de que lo necesitemos.
    const [cart, setCart] = useState([]);

    //6. Creamos funciones para manipular el estado del contexto

    const addToCart = (item, cantidad) => {
        const producto = { ...item, cantidad };
        if (isInCart(producto.id)) {
            //sumo la cantidad
            // alert('Ya está en el carrito flaco, sumale la cantidad');
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
                    cantidad: prodDelCart.cantidad + prodAgregado.cantidad,
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

    //borrar un solo producto
    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(prodFiltrados);
        // array [1]
    };

    //sumar cantidad total de unidades
    //for, forEach, for of, reduce

    //sumar precio total
    //for, forEach, for of, reduce

    console.log(cart);

    //7. A través del value compartimos la información (estados, funciones, etc) con todos los children.
    return (
        <CartContext.Provider value={{ cart, addToCart, deleteAll, deleteOne }}>
            {children}
        </CartContext.Provider>
    );
};

export default Provider;

//TIP para crear una copia:
// const copia = cart ⛔️
//copia.forEach(()=>) {} ⛔️

// const copia = [...cart] ✅
// copia.forEach(()=>) {} ✅
//
