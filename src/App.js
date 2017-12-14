import React, { Component } from 'react';
import Rebase from 're-base';
import base from './rebase';

import './App.css';

import logo from './assets/wifiw.jpg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      wifiw: {
        championships: [],
        coaches: [],
      },
      loading: true,
    }

    this.filterNumbers = this.filterNumbers.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }
  componentDidMount() {
    base.syncState('wifiw', {
      context: this,
      state: 'wifiw',
      asArray: false,
      then() {
        this.setState({ loading: false });
      }
    });
  }

  filterNumbers(array) {
    return array.filter(value => !isNaN(value)).length > 0
    ? array.filter(value => !isNaN(value))
    : [];
  }

  getTotal(array) {
    if (this.filterNumbers(array).length === 0) return null;
    return array.filter(value => !isNaN(value)).reduce((prev, act) => prev + act);
  }

  getAveragePerChamp(points, games) {
    return !isNaN(points / games) ? points / games : null;
  }

  render() {
    const { championships, coaches, bonus } = this.state.wifiw;

    const headerTable = championships.map(champ => <th>{champ.name}</th>);

    const tableData = [];

    coaches.forEach((coach,index) => {
      const coachResults = [];
      championships.forEach(champ => {
        if (champ.coaches) {
          const result = champ.coaches.find(champCoach => {
            return champCoach.name === coach;
          });
          if (result === undefined) return coachResults.push({});
          return coachResults.push(result.points);
        };
        coachResults.push({});
      });

      tableData.push({
        name: coach,
        total: this.getTotal(coachResults),
        averagePerChamp: this.getAveragePerChamp(this.getTotal(coachResults), this.filterNumbers(coachResults).length),
      });
    });
    console.log(tableData);


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="WIFIW" />
          <h1 className="App-title">WIFIW - Corrida dos campeões 2017/2018</h1>
        </header>
        <p className="App-intro">
          <table>
            <tr>
              <th>Posição</th>
              <th>Treinador</th>
              <th>Total</th>
              <th>Média</th>
              {headerTable}
            </tr>
            <tr>

            </tr>
          </table>
        </p>
      </div>
    );
  }
}

export default App;
