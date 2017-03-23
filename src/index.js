import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
      hasWon: true,
      playerArray: [],
      answerArray: ['A', 'B', 'A', 'Fight Monster'],
      rooms: [
        {
          roomName: 'Room1',
          message: 'You are in this room1 and your choices are: A || B.',
          buttonA: 'A',
          buttonB: 'B'
        },
        {
          roomName: 'Room2',
          message: 'You are in this room2 and your choices are: A || B.',
          buttonA: 'A',
          buttonB: 'B'
        },
        {
          roomName: 'Room3',
          message: 'You are in this room3 and your choices are: A || B.',
          buttonA: 'A',
          buttonB: 'B'
        },
        {
          roomName: 'FinalRoom',
          message: 'Did you win?',
          buttonA: 'Fight Monster',
          buttonB: 'Run away'
        },
      ],
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(clickValue) {    
    let newSetStateObject = {};

    const newPlayerArray = this.state.playerArray.concat(clickValue);
  
    if (newPlayerArray.length <= this.state.answerArray.length){
      if (newPlayerArray[this.state.idx] !== this.state.answerArray[this.state.idx]) {
        newSetStateObject.hasWon = false;
      }
    }
    const newIdx = this.state.idx + 1;
    newSetStateObject.idx = newIdx;
    newSetStateObject.playerArray = newPlayerArray;
    this.setState(newSetStateObject);
  }

  render() {
    if (this.state.idx < 4) {
      // console.log('make room number', this.state.idx);
      return <MakeRoom clickHandler={this.clickHandler} room={this.state.rooms} index={this.state.idx} />;
    } else {
      // console.log('this.state.idx is ', this.state.idx, this.state.hasWon);
      return <WinOrLosePage result={this.state.hasWon}/>;
    } 
  }
}

function MakeRoom(props) {
  let clickValue = props.room[props.index];
  return (
    <div>
      <p>{props.room[props.index].message}</p>
      <button onClick={() => {props.clickHandler(clickValue.buttonA);}}> 
        {clickValue.buttonA}
      </button>
      <button onClick={() => {props.clickHandler(clickValue.buttonB);}}>
        {clickValue.buttonB}
      </button>
    </div>
  );
}

function WinOrLosePage(props) {
  let results; 

  if (props.result) results = <p>You win!</p>;
  else results = <p>You lose :(</p>;

  return results;
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
