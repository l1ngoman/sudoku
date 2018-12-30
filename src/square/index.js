import React, { Component } from 'react';
import './styles.css'

class Square extends Component {
  constructor(props){
    super(props)

    this.state = {
      view: "",
      style: {}
    }
  }
  render() {
    let {view,style} = this.state
    return(
      <main className={this.styleSwitch()} onClick={this.handleClick}>
        <div style={style}>
          {view}
        </div>
      </main>
    );
  }

  styleSwitch = () => {
    let { altFormat, viewOn } = this.props
    let format;
    switch(altFormat){
      case 1:
        viewOn ? format = "normal thickBtm selected" : format = "normal thickBtm"
        break;
      case 2:
        viewOn ? format = "normal thickSide selected" : format = "normal thickSide"
        break;
      case 3:
        viewOn ? format = "normal thickBtm thickSide selected" : format = "normal thickBtm thickSide"
        break;
      default:
        viewOn ? format = "normal selected" : format = "normal"
        break;
    }
    return format;
  }

  handleClick = () => {
    console.log(`${this.props.id} was clicked!`);
    this.props.handleClickBoard(this.props.id);

  }
}

export default Square;
