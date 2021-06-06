import React, { useState } from 'react';

import './App.css';

import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import SectionPrincipal from './components/section-principal/SectionPrincipal';
import SectionSecundary from './components/section-secundary/SectionSecundary';
import ContactForm from './components/contact-form/ContactForm';

interface AppProps{
  contactName: string;
  email: string;
  year: number;
};

function App({contactName,year, email}: AppProps) {
  return (
    <div className="App">
      <Menu />
      <Header/>
      <SectionPrincipal/>
      <SectionSecundary/>
      <ContactForm />
      <Footer contactName = {contactName}  year={year}  email={email}/>
    </div>
  );
}

export default App;
