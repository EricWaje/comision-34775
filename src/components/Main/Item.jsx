import React from 'react';

const Item = () => {
    //renderizado en el DOM de los productos
    return (
        <article className="card">
            <img
                src="https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera2_pe94nf.jpg"
                alt=""
            />
            <div className="card-info">
                <h2>Nombre</h2>
                <h4>$Precio.-</h4>
                <h5>#Categoria</h5>
            </div>
        </article>
    );
};

export default Item;
