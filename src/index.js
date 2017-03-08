import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*var userAnswerArr = [];
var answerArr = ['A', 'B', 'B'];
var idx = 0;

const rooms = [
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
    buttonA: 'Fight monster',
    buttonB: 'Run away'
  },
];

function MakeRoom(props) {
  console.log('idx in mkrom', idx);
  return (
    <div>
      <p>{props.rooms[this.state.idx].message}</p>
      <Button value={props.room.buttonA} />
      <Button value={props.room.buttonB} />
    </div>
  );
}

function WinOrLose(props) {
  console.log(props.decision);
  if (props.decision) {
    return <p>You win!</p>;
  }
  else {
    return <p>You lose.</p>;
  }
}

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { hasWon: true };
    console.log('constructor', this.state.hasWon)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    
    userAnswerArr.push(this.props.value);
    
    if (userAnswerArr[idx] !== answerArr[idx]) { this.setState({ hasWon: false }) }
    console.log("userAnsArr", userAnswerArr[idx])
    console.log("AnsArr", answerArr[idx])
    console.log(this.state.hasWon)
    idx++;


    if(idx < answerArr.length) {
      // ReactDOM.render(
      //   <MakeRoom />,
      //   document.getElementById('root')
      // );

    } else if (idx === answerArr.length) {
      // ReactDOM.render(
      //   <MakeFinalRoom />,
      //   document.getElementById('root')
      // );

    } else {
      // ReactDOM.render(
      //   <WinOrLose decision={this.state.hasWon} />,
      //   document.getElementById('root')
      // );
    }
  };

  render() {
    return <button onClick={this.handleClick}>Choose {this.props.value}</button>;
  };
}


ReactDOM.render(
    <Button rooms={rooms}/>,
    document.getElementById('root')
  );
}*/


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
          buttonA: 'Fight monster',
          buttonB: 'Run away'
        },
      ],
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(clickValue) {
    // e.preventDefault();
    console.log('clickv', clickValue);
    
    console.log('before click', this.state.idx);

    const newPlayerArray = this.state.playerArray.concat(clickValue);
    const newIdx = this.state.idx + 1;
    // let updatedArr = this.state.playerArray.push(clickValue);
    let newSetStateObject = { idx: newIdx, playerArray: newPlayerArray };
    // this.setState({ idx: newIdx, playerArray: newPlayerArray });
    // this.state.playerArray.push(clickValue);
    console.log('playerArr is', newPlayerArray);
    // console.log('after click', this.state.idx);

    // if (this.state.playerArray[this.state.idx] !== this.state.answerArray[this.state.idx]) {
    //   this.setState({ hasWon: false });
    // }
    if (newSetStateObject.playerArray[newSetStateObject.idx] !== this.state.answerArray[newSetStateObject.idx]) {
      newSetStateObject.hasWon = false;
    }
    console.log('hasWon state', this.state.hasWon);
    this.setState(newSetStateObject);

  }

  render() {
    if (this.state.idx < 4) {
      return <MakeRoom clickHandler={this.clickHandler} room={this.state.rooms} index={this.state.idx} />;
    } else {
      return <WinOrLosePage result={this.hasWon}/>;
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
