import { useEffect } from 'react';

const Ejemplo = () => {
    //estado
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((resultado) => resultado.json())
            .then((res) => {
                console.log(res);
                //guardar en el estado
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                quas consectetur saepe hic cum itaque blanditiis officiis nulla
                ratione asperiores possimus quia, magni eaque nostrum molestiae
                est fugiat? Porro, esse.
            </p>
        </div>
    );
};

export default Ejemplo;
