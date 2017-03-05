import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var userAnswerArr = [];
var answerArr = ['A', 'B', 'B'];
var idx = 0;

const rooms = [
  {
    roomName: 'Room1',
    message: 'You are in this room1 and your choices are: A || B.',
  },
  {
    roomName: 'Room2',
    message: 'You are in this room2 and your choices are: A || B.',
  },
  {
    roomName: 'Room3',
    message: 'You are in this room3 and your choices are: A || B.',
  }
];
const finalRoom = {
  // message: ''
};

// MakeRoom(idx);

function RoomMessage(props) {
  console.log('indx in rom msag', props.room.message);
  return <p>{props.room.message}</p>
}

function MakeRoom(props) {
  console.log('idx in mkrom', idx);
  return (
    <div>
      <RoomMessage room={rooms[idx]} />
      <Button value='A' />
      <Button value='B' />
    </div>
  );
}

function MakeFinalRoom(props) {
  return (
    <div>
      <p>Did you win?</p>
      <Button value='fight monster' />;
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

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasWon: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    if (userAnswerArr[idx] !== answerArr[idx]) { this.setState({ hasWon: false }) }

    if (userAnswerArr.length < answerArr.length) {
      userAnswerArr.push(this.props.value);
      idx++;
      console.log('userArr ', userAnswerArr);
      console.log('state is, ', this.state.hasWon);
      ReactDOM.render(
        <MakeRoom />,
        document.getElementById('root')
      );
    }
    else if (userAnswerArr.length === answerArr.length) {
      ReactDOM.render(
        <MakeFinalRoom />,
        document.getElementById('root')
      );
    }
    else {

      ReactDOM.render(
        <WinOrLose decision={this.state.hasWon} />,
        document.getElementById('root')
      );
    }

  };

  render() {
    return <button onClick={this.handleClick}>Choose {this.props.value}</button>;
  };
}

if(!userAnswerArr.length)
  {ReactDOM.render(
    <MakeRoom />,
    document.getElementById('root')
  );
}