import React, { Component } from 'react';
import Rebase from 're-base';

import logo from './logo.svg';
import './App.css';

import base from './rebase';

class App extends Component {
  constructor() {
    super();

    this.state = {
      championships: {},
      loading: true,
    }
  }
  componentDidMount() {
    base.syncState('championships', {
      context: this,
      state: 'championships',
      asArray: true,
      then() {
        this.setState({ loading: false });
        const { championships } = this.state;
        championships[0].coaches = {
          'Marcel Chamusca*',
          'Zico Correa',
          'Marcello Lippi',
          'Diegol Oliveira',
          'Jaderley Luxemburgo',
          'Rodrigol Oliveira',
          'Vitor Zagallo*',
          'Cassio Gaúcho',
          'Thigato Villasboas',
          'Toni Sanches',
          'Brunno de OliTetta',
          'Renato Galvolotte',
          'Marcel Frescoroni*',
          'Richard Fucks',
        }
      }
    });
  }
  render() {
    const { championships } = this.state;
    console.log(championships);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WIFIW - Corrida dos campeões 2018</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
