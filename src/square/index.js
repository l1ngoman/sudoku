import React, { Component } from 'react';
import { normal,thickBtm,thickSide,thickBoth } from './styles'

class Square extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <main style={this.styleSwitch()}>
        <h6>{this.props.id}</h6>
      </main>
    );
  }

  styleSwitch = () => {
    let format;
    switch(this.props.altFormat){
      case 1: format = thickBtm; break;
      case 2: format = thickSide; break;
      case 3: format = thickBoth; break;
      default: format = normal; break;
    }
    return format;
  }
}

export default Square;
