import React, { Component } from 'react';
import Board from './board'
import Options from './options'
import './App.css'


class App extends Component {
  render() {
    return (
      <main className="main">
        <Board />
        <Options />
      </main>
    );
  }
}

export default App;
