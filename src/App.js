import React, { Component } from 'react';
import Board from './board'
import Options from './options'
import './App.css'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      userValue: '',
      squareID: ''
    }
  }
  render() {
    return (
      <main className="main">
        <section className="board">
          <Board userValue={this.state.userValue}/>
        </section>
        <section className="options">
          <Options getValue={this.getValue}/>
        </section>
      </main>
    );
  }

  getValue = (buttonValue) => {
    console.log(buttonValue);
    this.setState({userValue: buttonValue})
  }

}

export default App;
