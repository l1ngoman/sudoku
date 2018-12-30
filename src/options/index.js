import React, { Component } from 'react';
import Button from './button'

class Options extends Component {
  render() {
    let btns = new Array(9).fill('').map((el,i) => <Button key={i} id={i+1}/>)
    return (
      <main>
        {btns}
      </main>
    );
  }
}

export default Options;
