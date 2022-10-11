import { useEffect, useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target);
        // console.dir(e.target.elements.nombre.value);
        // console.dir(e.target.elements.apellido.value);
        console.log({ name, lastName });
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };

    const handleMouseMove = (e) => {
        //console.log(e.clientX, e.clientY);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        //conexión
        return () => {
            //clean up function
            window.removeEventListener('mousemove', handleMouseMove);
            //clearInterval
            //abortar conexíon
        };
    });

    return (
        <div
            style={{
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div>
                <button>Click!</button>
            </div>
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
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;
