import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

import logo from './logo.svg';
//import badge from './static/Herobadge.png';
import './App.css';

import AppRoute from "./AppRoute";
import Menu from "./menu/Menu";
import FooterHero from './footer-hero/FooterHero';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Heroes Association</h1>
          </header>
          <AppRoute />
          <FooterHero />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
