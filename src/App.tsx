import React from 'react';

import './App.css';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ItemPrimary from './components/item-primary/ItemPrimary';

import SectionPrincipal from './components/section-principal/SectionPrincipal';
import SectionSecundary from './components/section-secundary/SectionSecundary';

interface AppProps{

  contactName: string;
  email: string;
  year: number;
  
}

function App({contactName,year, email}: AppProps) {

  return (
    <div className="App">
      <ItemPrimary/>
      <Header/>
      <SectionPrincipal/>
      <SectionSecundary/>
      <Footer contactName = {contactName}  year={year}  email={email}/>
    </div>
  );
}

export default App;
