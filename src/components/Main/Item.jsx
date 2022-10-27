import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ prod }) => {
    return (
        <article className="card">
            <img src={prod.img} alt={prod.title} />
            <div className="card-info">
                <h2>{prod.title}</h2>
                <h4>${prod.price}.-</h4>
                <h5>#{prod.category}</h5>
                {prod.stock === 0 ? (
                    <h6>No hay stock</h6>
                ) : (
                    <Link to={`/item/${prod.id}`}>Ver detalle</Link>
                )}
            </div>
        </article>
    );
};

export default Item;
