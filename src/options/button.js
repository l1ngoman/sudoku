import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button>
        {this.props.id}
      </button>
    );
  }
}

export default Button;
