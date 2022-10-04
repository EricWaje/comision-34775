import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
    //console.log(props.items);
    //mapeo de los productos
    return (
        <div className="item-list">
            {items.map((prod) => {
                return <Item prod={prod} key={prod.id} />;
            })}
        </div>
    );
};

export default ItemList;
