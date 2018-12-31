import React, { Component } from 'react';
import Square from '../square'
import './styles.css'

class Board extends Component {
  constructor(props){
    super(props)

    this.state = {
      squareArray: new Array(81).fill(''),
      formattedSquares: {
        one: [[18,19,21,22,24,25,26],
              [45,46,48,49,51,52,53]],
        two: [[2,11,29,38,56,65,74],
              [5,14,32,41,59,68,77]],
        three: [20,23,47,50]
      },
      squareValues: []
    }
  }
  render() {
    console.log(this.props.userValue);
    let { squareArray,style } = this.state
    return (
      <main className="boardContainer">
        {this.state.squareArray}
      </main>
    );
  }

  componentDidMount(){
    this.renderSquares()
  }

  renderSquares = (selectedID) => {
    let { squareArray,squareValues } = this.state;
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
      if(selectedID === i){
        return (
          <Square
            key={i}
            id={i}
            altFormat={altFormat}
            handleClickBoard={this.handleClickBoard}
            value={''}
            selected={true}
            />
           );
      } else {
        return (
          <Square
            key={i}
            id={i}
            altFormat={altFormat}
            handleClickBoard={this.handleClickBoard}
            value={''}
            selected={false}
            />
           );
      }
    })
    this.setState({squareArray: squares});
  }

  handleClickBoard = (selectedID) => {
    console.log(this.props.userValue);
    let {squareArray} = this.state
    console.log(squareArray[selectedID]);
    this.renderSquares(selectedID)
    let { one,two,three } = this.state.formattedSquares;
    let altFormat = 0;
    if(one[0].indexOf(selectedID) >= 0 || one[1].indexOf(selectedID) >= 0){
      altFormat = 1;
    }else if(two[0].indexOf(selectedID) >= 0 || two[1].indexOf(selectedID) >= 0){
      altFormat = 2;
    }else if(three.indexOf(selectedID) >= 0){
      altFormat = 3;
    }
    squareArray[selectedID] = (<Square
                                key={selectedID}
                                id={selectedID}
                                altFormat={altFormat}
                                handleClickBoard={this.handleClickBoard}
                                value={this.props.userValue}
                                selected={false}
                                />)
    this.setState({squareArray})
  }
}

export default Board;
