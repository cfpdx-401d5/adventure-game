import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let rooms = [
  {
    roomName: 'Selection Room 1',
    message: ['You are in a dark room.', 'Scary, huh?', 'It probably doesn\'t help that you know you\'ll soon encounter a monster.', 'Better pick up one of these items to help you defeat it.'],
    buttonA: {
      name: 'GOLD',
      image: '',
    },
    buttonB: {
      name: 'COOKIE',
      image: '',
    }
  },
  {
    roomName: 'Selection Room 2',
    message: ['Dude.', 'It\'s still dark and still scary.', 'Good thing you freed up your other hand.', 'Choose another item to take with you to the next room.'],
    buttonA: {
      name: 'SWORD',
      image: '',
    },
    buttonB: {
      name: 'TEDDY BEAR',
      image: '',
    }
  },
];

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageNumber: 0,
      currentMessage: props.room.message[0],
      lastMessage: false,
    }
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }
  componentDidMount() {
    this.messageDisplay();
  }

  messageDisplay() {
    this._timer = setInterval(() => {
      const newNumber = this.state.messageNumber + 1;
      const newMessage = this.props.room.message[newNumber]
      if (this.state.messageNumber === 3) {
        this.setState({
          lastMessage: true,
        })
        clearInterval(this._timer);
      } else {
        this.setState({
          messageNumber: newNumber,
          currentMessage: newMessage
        })
      }
    }, 1800);
  }

  render() {
    if (!this.state.lastMessage){
      return (
        <div>
          <p>{this.props.room.message[this.state.messageNumber]}</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>{this.props.room.message[this.state.messageNumber]}</p>
          < SelectionBar 
            buttonA={this.props.room.buttonA} 
            buttonB={this.props.room.buttonB} 
            onSelection={this.props.onSelection}
          />
        </div>
      );
    }
  }
}

function SelectionBar(props) {
  console.log('props',props)
  return (
    <div>
      <button onClick={(e) => props.onSelection(e, props.buttonA)}>{props.buttonA.name}</button>
      <button onClick={(e) => props.onSelection(e, props.buttonB)}>{props.buttonB.name}</button>
    </div>
  );
}

function WinOrLose(props) {
  if (props.hasWon === false) {
    return (
      <div>
        <p>You picked the wrong item! You did not defeat the monster!</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <p>Good thing you didn't eat that cookie! You've made the Cookie Monster very happy!!!</p>
      </div>
    )
  }
}

class GameApp extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      hasWon: false,
      roomNumber: 0,
      selections: [],
      message: props.rooms[0].message,
    };
    this.onSelection = this.onSelection.bind(this);
  }

  onSelection(e, selected) {
    e.preventDefault();

    let newSelections = this.state.selections.slice();
    newSelections.push(selected);

    let roomNumber = this.state.roomNumber + 1;
    let roomCount = this.props.rooms.length;
    let message;

    if (roomNumber < roomCount) {
      message = rooms[roomNumber].message;
    } else if (roomNumber === roomCount) {
      message = ['You can hear the monster in the next room.', 'Eeek!', 'You don\'t have enough energy to carry both items with you.', 'Choose the one item you think with defeat the monster.'];
    }

    this.setState({
      roomNumber,
      selections: newSelections,
      hasWon: newSelections.length === 3 && selected.name === 'COOKIE' ? true : false,
      message,
    });
  }

  render() {
    let roomNumber = this.state.roomNumber;
    let roomCount = this.props.rooms.length;
    if(roomNumber > roomCount) {
      return (
        <WinOrLose hasWon={this.state.hasWon}/>
      )
    }

    let room = rooms[roomNumber]
    if (!room) { 
      room = {
        buttonA: this.state.selections[0],
        buttonB: this.state.selections[1],
      }
    }

    //move selectionbar to room component
    //pass room, key, onSelection to Room as props
    return (
      <div>
        < Room key={this.state.roomNumber} room={room} onSelection={this.onSelection}/>
      </div>
    );
  }
}


ReactDOM.render(
  <GameApp rooms={rooms} />,
  document.getElementById('root')
);