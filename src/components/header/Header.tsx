import React from 'react';
import imageHeader from './Servicios.jpg'
import './Header.module.css'

function Header() {

    return (
        <header className="py-5 bg-image-full">
            <div className="text-center my-5">
                <img className="img-fluid rounded-circle mb-4" alt="..."  src={imageHeader}  />
                <h1 className="text-white fs-3 fw-bolder">Servicios</h1>
            </div>
        </header >
    );
};

export default Header