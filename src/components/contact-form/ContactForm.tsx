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
        <section id="section-contact" className="container text-start">
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-xs-12 col-sm-8 mb-3">
                        <label htmlFor="Nombre" className="form-label">Nombre</label>
                        <input id="Nombre" name="Nombre" type="text" className="form-control" onChange={handleInput} required />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-8 mb-3">
                        <label htmlFor="Correo" className="form-label">Correo Electronico</label>
                        <input id="Correo" name="Correo" type="email" className="form-control" onChange={handleInput} required />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-8 mb-3">
                        <label htmlFor="Mensaje" className="form-label">Mensaje</label>
                        <textarea id="Mensaje" name="Mensaje" className="form-control" onChange={handleInput}></textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-8 mb-3">
                        <input type="submit" className="btn btn-primary" value="Enviar" />
                    </div>
                </div>
            </form>
        </section>
    );
};