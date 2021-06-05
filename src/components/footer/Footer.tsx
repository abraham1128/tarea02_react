import React from 'react';

interface AppProps{

    contactName: string;
    email: string;
    year: number;
    
  }

function Footer({contactName, year, email}: AppProps) {

    return (
        <footer className="py-5 bg-dark" id="contacto">
            <div className="container">
                <p className="m-0 text-center text-white">{contactName} &copy; {year} {email}</p>
            </div>
        </footer>
    );
};

export default Footer