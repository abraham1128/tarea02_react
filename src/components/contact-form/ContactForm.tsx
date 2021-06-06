import React, { FormEvent, useState } from 'react';

interface Contacto {
    Nombre: string,
    Correo: string,
    Mensaje: string
};

export default function ContactForm() {
    const [usuario, setUsuario] = useState<Contacto>({
        Nombre: '',
        Correo: '',
        Mensaje: ''
    });

    const handleInput = (event: any): void => {
        setUsuario({
            ...usuario,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        alert(JSON.stringify(usuario));
    };

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="Nombre">Nombre</label>
        <input id="Nombre" name="Nombre" type="text" onChange={handleInput} required />

        <label htmlFor="Correo">Correo Electronico</label>
        <input id="Correo" name="Correo" type="email" onChange={handleInput} required />

        <label htmlFor="Mensaje">Mensaje</label>
        <textarea id="Mensaje" name="Mensaje" onChange={handleInput}></textarea>

        <input type="submit" value="Enviar" />
    </form>
    );
};