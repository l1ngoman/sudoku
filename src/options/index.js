import React, { Component } from 'react';
import Button from './button'

class Options extends Component {
  render() {
    let btns = new Array(9).fill('').map((el,i) => <Button key={i} id={i+1} getValue={this.props.getValue}/>)
    return (
      <main className="optionsContainer">
        {btns}
      </main>
    );
  }
}

export default Options;
