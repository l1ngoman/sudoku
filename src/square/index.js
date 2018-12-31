import React, { Component } from 'react';
import './styles.css'

class Square extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <main className={this.styleSwitch()} onClick={this.handleClick}>
        <div className="square">
          {this.props.value}
        </div>
      </main>
    );
  }

  handleClick = () => {
    console.log(`${this.props.id} was clicked!`);
    this.props.handleClickBoard(this.props.id);
  }

  styleSwitch = () => {
    let { altFormat } = this.props
    let format;
    switch(altFormat){
      case 1: format = "normal thickBtm"; break;
      case 2: format = "normal thickSide"; break;
      case 3: format = "normal thickBtm thickSide"; break;
      default: format = "normal"; break;
    }
    return format;
  }
}

export default Square;
