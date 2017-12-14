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
    };

    this.saveData = this.saveData.bind(this);
  }
  componentDidMount() {
    base.syncState('championships', {
      context: this,
      state: 'championships',
      asArray: true,
      then() {
        this.setState({ loading: false });
        this.updateRace();
      }
    });
  }

  saveData() {
    // this.setState({
    //   championships: []
    // })
  }

  updateRace() {
    const { championships } = this.state;
    championships.forEach(champ => {
      console.log(champ);
    })
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
        <div className="save">
          <button onClick={this.saveData}>CLICK ME</button>
        </div>
      </div>
    );
  }
}

export default App;
