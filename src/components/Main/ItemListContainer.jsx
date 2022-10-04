import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'; //-> import por default
import { products } from '../../mock/productsMock';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    //estado

    useEffect(() => {
        const traerProductos = () => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(products);
                }, 2000);
            });
        };
        traerProductos()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    //console.log(items);

    return (
        <div className="item-list-container">
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
