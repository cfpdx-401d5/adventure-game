import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import PioneerScene from './pioneer';
// import App from './App'; // in _forReference folder
// import './index.css';  // in _forReference folder

function Scene (props) {
  return (
    <div>
      {props.scene.title}
    </div>
  )
}

class GameApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      sceneIndex: 0,
      scenes: [
        {
          title: 'Pioneer Square'
        },
        {
          title: 'Oregon Zoo'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Scene scene={this.state.scenes[this.state.sceneIndex]}/>
      </div>
    )
  }
}

ReactDOM.render(
  <GameApp />,
  document.getElementById('root')
);


//turning header into component
/*function Pioneer(props) {
  function goToTheZoo(e) {
    e.preventDefault();

    ReactDOM.render(
      <Zoo />,
      document.getElementById('root')
    )
  }

  function getDrink(e) {
    e.preventDefault();
    alert('You had a latte with your friend and got up with the most recent gossip. Your friend drives you to the Zoo just in time for your daughter\'s party! \n (Close out of this and click Go to Zoo button)');
  }

  return (
    <div>
      <h1>Welcome to Pioneer Square!</h1>
      <img role='presentation' src='pioneer-square.jpg'/>
      <p>Your daughter's birthday party is at the zoo and you are running late. You're car broke down and you are at Pioneer Square. You run into an old buddy from High School who offers to buy you coffee. Do you risk missing the max to catch up with an old friend?</p>
      <button onClick={goToTheZoo}>Go to the Zoo</button>
      <button onClick={getDrink}>Have a drink</button>
  </div>
  )
}

function Zoo(props) {
  function goToCouncilCrest(e) {
    e.preventDefault();

    ReactDOM.render(
      <CouncilCrest />,
      document.getElementById('root')
    )}

  function doWork(e) {
    e.preventDefault();
    alert('You told your daughter you had to leave early to get prepared for your big meeting and she stops talking to you. You end up watching the sunset by yourself and go to bed early to get some rest.');
  }

  return (
    <div>
      <h1>You are at the Zoo</h1>
      <img role='presentation' src='zoo.jpeg' />
      <p>You are at the Zoo celebrating your daughter's birthday when you get a call from your boss. You forgot that big meeting with all of the executives is tomorrow morning! But you're daughter wants to go to Council Crest and watch the sunset to end her birthday celebration. What do you do?</p>
      <button onClick={goToCouncilCrest}>Go to Council Crest</button>
      <button onClick={doWork}>Finish Work</button>
    </div>
  )
}

function CouncilCrest (props) {
  return (
    <div>
      <h1>You are at Council Crest</h1>
      <img role='presentation' src='council-crest.jpg' />
      <p>What an exciting day you had. Your car is ready to pick up from the mechanics in time for work tomorrow and everything works out okay.</p>
    </div>
  )
}*/
