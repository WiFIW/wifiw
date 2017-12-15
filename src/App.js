import React, { Component } from 'react';
import Rebase from 're-base';
import base from './rebase';

import './App.css';

import wifiwLogo from './assets/wifiw.jpg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      wifiw: {
        championships: [],
        coaches: [],
        bonus: [],
      },
      loading: true,
    }

    this.getOnlyNumbers = this.getOnlyNumbers.bind(this);
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

  getOnlyNumbers(array) {
    return array.filter(value => !isNaN(value)).length > 0
    ? array.filter(value => !isNaN(value))
    : [];
  }

  getTotal(array) {
    if (this.getOnlyNumbers(array).length === 0) return null;
    return array.filter(value => !isNaN(value)).reduce((prev, act) => prev + act);
  }

  getAveragePerChamp(points, games) {
    return !isNaN(points / games) ? (points / games).toFixed(2) : null;
  }

  render() {
    const { championships, coaches, bonus } = this.state.wifiw;
    const headerTable = championships.concat(bonus).map(champ => <th>{champ.name}</th>);
    const tableData = [];
    const lastChampIndex = 4;

    coaches.forEach((coach,index) => {
      const coachResults = [];
      let champsParticipated = 0;

      championships.forEach(champ => {
        if (champ.coaches) {
          const result = champ.coaches.find(champCoach => {
            return champCoach.name === coach;
          });
          if (result === undefined) return coachResults.push({});
          champsParticipated += 1;
          return coachResults.push(result.points);
        };
        coachResults.push({});
      });

      bonus.forEach(item => {
        if (item.coaches) {
          const result = item.coaches.find(champCoach => {
            return champCoach.name === coach;
          });
          if (result === undefined) return coachResults.push({});
          return coachResults.push(result.points);
        };
        coachResults.push({});
      });

      tableData.push([
        coach, //name
        this.getTotal(coachResults), //total
        this.getAveragePerChamp(this.getTotal(coachResults), champsParticipated), //averagePerChamp
      ].concat(coachResults));
    });


    tableData.sort((a, b) => {
      if (a[1] < b[1]) return -1;
      if (a[1] > b[1]) return 1;
      if (a[1] === b[1] && a[lastChampIndex] < b[lastChampIndex]) return -1;
      if (a[1] === b[1] && a[lastChampIndex] > b[lastChampIndex]) return 1;
      return 0;
    })

    tableData.reverse();

    const content = [];

    if (tableData.length > 0) {
      content.push(tableData.map((line, index) => {
        const lineContent = line.map((block, blockIndex) => !isNaN(block) || blockIndex === 0 ? <td>{block}</td> : <td>-</td>);
        return (
          <tr>
            <td>{index + 1}</td>
            {lineContent}
          </tr>
        );
      }));
    }

    console.log(content);

    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
        <header className="App-header">
          <img src={wifiwLogo} className="App-logo" alt="WIFIW" />
          <h1 className="App-title">WIFIW - Corrida dos campeões 2017/2018</h1>
        </header>

        <div className="wrapper">
          <table>
            <tbody>
              <tr>
                <th>Posição</th>
                <th>Treinador</th>
                <th>Total</th>
                <th>Média</th>
                {headerTable}
              </tr>
              {content}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
