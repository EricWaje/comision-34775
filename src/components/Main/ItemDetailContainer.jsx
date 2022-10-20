import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const collectionProd = collection(db, 'productos');
        const ref = doc(collectionProd, id);

        getDoc(ref)
            .then((res) => {
                //console.log(res);
                setItem({
                    id: res.id,
                    ...res.data(),
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div className="item-list-container">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;

// const traerProducto = () => {
//     return new Promise((res, rej) => {
//         const producto = products.find((prod) => prod.id === Number(id));

//         setTimeout(() => {
//             res(producto);
//         }, 500);
//     });
// };
// traerProducto()
//     .then((res) => {
//         setItem(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
