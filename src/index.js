import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var userAnswerArr = [];

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

let propKey;
function FnButton(props) {
  console.log('fnbtn', props.akey);

  propKey = props.akey;

  return (
    <button onClick={onClicky(props.akey)}>here be a button</button>
  );
}


function RoomMessage(props) {
  
  return (
    <div>
      <p>{props.room.message}</p>
      <FnButton akey='a' />
      <FnButton akey='b' />
    </div>
  );
}

var idx = 0;

function onClicky(e) {
  e.preventDefault();
  
  idx++;
  console.log('idx is..', idx);
  console.log('inside onclicky', propKey);
  // userAnswerArr.push(this.props.akey);
  // console.log('inside btn fn', userAnswerArr);

  // console.log('look for a key', this.other);

  ReactDOM.render(
    <RoomMessage room={rooms[idx]} />,
    document.getElementById('root')
  );
}

ReactDOM.render(
  <RoomMessage room={rooms[idx]} />,
  document.getElementById('root')
);
