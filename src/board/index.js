import React, { Component } from 'react';
import Square from '../square'
import { style,boardContainer } from './styles'

class Board extends Component {
  constructor(props){
    super(props)

    this.state = {
      squareArray: new Array(81).fill(''),
      formattedSquares: {
                          one: [
                                [18,19,21,22,24,25,26],
                                [45,46,48,49,51,52,53]
                               ],
                          two: [
                                [2,11,29,38,56,65,74],
                                [5,14,32,41,59,68,77]
                               ],
                          three: [20,23,47,50]
                        }
    }
  }
  render() {
    let { squareArray } = this.state
    return (
      <main style={boardContainer}>
        {this.state.squareArray}
      </main>
    );
  }

  componentDidMount(){
    this.renderSquares();
  }

  renderSquares = () => {
    let { squareArray } = this.state;
    let { one,two,three } = this.state.formattedSquares;
    let squares = squareArray.map((el,i) => {
      let altFormat = 0;
      if(one[0].indexOf(i) >= 0 || one[1].indexOf(i) >= 0){
        altFormat = 1;
      }else if(two[0].indexOf(i) >= 0 || two[1].indexOf(i) >= 0){
        altFormat = 2;
      }else if(three.indexOf(i) >= 0){
        altFormat = 3;
      }
      return <Square key={i} id={i} altFormat={altFormat} />
    })
    this.setState({squareArray: squares});
  }
}

export default Board;
