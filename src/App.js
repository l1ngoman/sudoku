import React, { Component } from 'react';
import Board from './board'
import { style } from './styles'


class App extends Component {
  render() {
    return (
      <main style={style}>
        <Board />
      </main>
    );
  }
}

export default App;
