import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'; // in _forReference folder
// import './index.css';  // in _forReference folder

//turning header into component
function Pioneer(props) {
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
    alert('You told your daughter you had to leave early to get prepared for your big meeting and she ignores you for the rest of the day. At least you got your work done for tomorrow');
  }

  return (
    <div>
      <h1>You are at the Zoo</h1>
      <img role='presentation' src='Unknown.jpeg' />
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
    </div>
  )
}

ReactDOM.render(
  <Pioneer />,
  document.getElementById('root')
);
