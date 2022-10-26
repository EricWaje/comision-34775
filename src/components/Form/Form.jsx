import {
    addDoc,
    collection,
    documentId,
    getDocs,
    query,
    serverTimestamp,
    where,
    writeBatch,
} from 'firebase/firestore';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/firebaseConfig';

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [loading, setLoading] = useState(false);

    const [orderId, setOrderId] = useState('');

    const { cart, total, deleteAll } = useContext(CartContext);

    const totalPrice = total();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        //console.log({ name, lastName });
        try {
            const order = {
                buyer: { name, lastName },
                items: cart,
                total: totalPrice,
                date: serverTimestamp(),
            };

            const ids = cart.map((prod) => prod.id);
            //['asd656vhd','vdsjsjkl43j534','ds78cdc']
            console.log(ids);

            const productsRef = collection(db, 'productos');

            const productsAddedFromFirestore = await getDocs(
                query(productsRef, where(documentId(), 'in', ids))
            );

            const { docs } = productsAddedFromFirestore;

            const outOfStock = [];

            const batch = writeBatch(db);

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDB = dataDoc.stock;

                const productAddedToCart = cart.find(
                    (prod) => prod.id === doc.id
                );

                const prodQuantity = productAddedToCart?.cantidad;

                if (stockDB >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDB - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                batch.commit();

                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, order);
                setOrderId(orderAdded.id);
                deleteAll();
            } else {
                console.log('No hay stock de algún producto');
            }
            console.log(outOfStock);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };

    if (orderId) {
        return (
            <h1>
                Gracias por tu compra, tu número de seguimiento es ${orderId}
            </h1>
        );
    }

    return (
        <div
            style={{
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form onSubmit={handleSubmit} action="">
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre..."
                    onChange={handleChangeName}
                    value={name}
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido..."
                    onChange={handleChangeLastName}
                    value={lastName}
                />
                <button>{loading ? 'Enviando...' : 'Enviar'}</button>
            </form>
        </div>
    );
};

export default Form;
