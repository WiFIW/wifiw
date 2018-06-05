import React, { Component } from 'react';

import './App.css';

import wifiwLogo from './assets/wifiw.jpg';


class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={wifiwLogo} className="App-logo" alt="WIFIW" />
          <h1 className="App-title">WIFIW - Corrida dos campeões 2017/2018</h1>
          <p className="loadingMessage">Carregando...</p>
        </header>
        <div>
          <div className="wrapper">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
