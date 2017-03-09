import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import cookie from '../assets/cookie.png';
import heart from '../assets/heart.png';
import sword from '../assets/sword.png';
import gold from '../assets/gold.png';

let rooms = [
  {
    roomName: 'Selection Room 1',
    message: ['You are in a dark room.', 'Scary, huh?', 'It probably doesn\'t help that you know you\'ll soon encounter a monster.', 'Better pick up a weapon.'],
    buttonA: {
      name: 'GOLD',
      image: gold,
    },
    buttonB: {
      name: 'COOKIE',
      image: cookie,
    }
  },
  {
    roomName: 'Selection Room 2',
    message: ['Dude.', 'It\'s still dark and still scary.', 'Good thing you freed up your other hand.', 'Choose another weapon to take with you to the next room.'],
    buttonA: {
      name: 'SWORD',
      image: sword,
    },
    buttonB: {
      name: 'HEART',
      image: heart,
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
  return (
    <div>
      <button onClick={(e) => props.onSelection(e, props.buttonA)}>
        <img 
          src={props.buttonA.image} 
          alt={props.buttonA.name}
        />
      </button>
      <button onClick={(e) => props.onSelection(e, props.buttonB)}>
        <img 
          src={props.buttonB.image} 
          alt={props.buttonB.name}
        />
      </button>
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

    let room = rooms[roomNumber];
    if(roomNumber === roomCount ) { 
      room = {
        message: this.state.message,
        buttonA: this.state.selections[0],
        buttonB: this.state.selections[1],
      }
    }

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