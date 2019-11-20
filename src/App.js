import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './inc/header/Header';
import Home from './inc/home/Home';
import Footer from './inc/footer/Footer';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
    <Home />
    <Footer />
   </BrowserRouter>
   
    </div>
  );
}

export default App;
