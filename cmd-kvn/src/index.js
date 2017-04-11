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
      answerArray: ['after breakfast', 'flowers', 'no', 'Fight ironically'],
      rooms: [
        {
          roomName: 'Room1',
          message: 'Little Red Riding Hood, when are you going to grandma\'s house?',
          buttonA: 'after breakfast',
          buttonB: 'after lunch'
        },
        {
          roomName: 'Room2',
          message: 'Little Red Riding Hood, what will you take for your grandmother?',
          buttonA: 'vinyl records',
          buttonB: 'flowers'
        },
        {
          roomName: 'Room3',
          message: 'Little Red Riding Hood, you found a typewriter on the path to grandma\'s! Do you take it?',
          buttonA: 'yes',
          buttonB: 'no'
        },
        {
          roomName: 'FinalRoom',
          message: 'OH NO! A HIPSTER WOLF! What do you do?',
          buttonA: 'Fight ironically',
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

  if (props.result) results = <p>You made it to grandma's house safely!</p>;
  else results = <p>Oh no :( It's impossible to be safe from hipster wolves after they've had brunch, smell a vintage record, or have access to a typewriter to finish their taxes. Grandma is so sad you never arrived.</p>;

  return results;
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
