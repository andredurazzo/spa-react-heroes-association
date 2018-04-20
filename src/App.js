import React, { Component } from 'react';
//import logo from './logo.svg';
import badge from './static/Herobadge.png';
import './App.css';

import AppRoute from "./AppRoute";
import Menu from "./menu/Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <img src={badge} className="App-logo" alt="logo" />
          <h1 className="App-title">Heroes Association</h1>
        </header>
        <AppRoute />
      </div>
    );
  }
}

export default App;
