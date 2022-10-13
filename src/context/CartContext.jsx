import { createContext, useState } from 'react';

export const CartContext = createContext();

const Provider = ({ children }) => {
    //console.log(props.children);
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        const producto = { ...item, cantidad };
        if (isInCart(producto.id)) {
            //sumo la cantidad
            alert('Ya está en el carrito flaco, sumale la cantidad');
        } else {
            setCart([...cart, producto]);
        }

        //...item -> id: 1, nombre: "Remera", price: 200
        // const usuario = {...item, nombre: "Eric", apellido: "Wajnrajch" }
        //cart.push() ⛔️
    };

    const isInCart = (id) => cart.some((prod) => prod.id === id);

    const deleteAll = () => setCart([]);

    //borrar un solo producto

    //sumar cantidad total de unidades

    //sumar precio total

    console.log(cart);

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteAll }}>
            {children}
        </CartContext.Provider>
    );
};

export default Provider;
