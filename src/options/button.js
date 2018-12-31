import React, { Component } from 'react';
import './styles.css'

class Button extends Component {
  render() {
    return (
      <button className="button" onClick={this.handleClick}>
        {this.props.id}
      </button>
    );
  }

  handleClick = () => {
    console.log("Running option change");
    this.props.getValue(this.props.id)
  }
}

export default Button;
