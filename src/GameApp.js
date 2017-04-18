import React, { Component } from 'react';

import VenueSelectorBar from './VenueSelectorBar';

import pixPioneerSquare from '../images/pioneer-square.jpg';
import pixOregonZoo from '../images/oregon-zoo.jpg';
import pixCouncilCrest from '../images/council-crest.jpg';

// game venue Pioneer Square
export function PioneerSquare(props) {

  function getDrink(e) {
    e.preventDefault();
    alert('You had a latte with your friend and got caught up with the most recent gossip. \nYour friend drives you to the Zoo just in time for your daughter\'s party! \n (Close out of this & click the Oregon Zoo button.)');
  }
  return (
    <div className='venue-divs'>
      <img src={pixPioneerSquare} className='pix' />
      <h1>Welcome to Pioneer Square!</h1>
      <p>Your daughter's 16th birthday party is at the zoo and you are running late. <br/> Your car broke down and you are now at Pioneer Square. <br/> You run into an old buddy from High School who offers to buy you coffee. <br/><br/> Do you risk missing the Max to catch up with an old friend?</p>
      <button onClick={getDrink}>Have a drink</button>
    </div>
  );

}

// game venue Oregon Zoo
export function OregonZoo(props) {

  function doWork(e) {
    e.preventDefault();
    alert('Bad choice!!! \nYou told your daughter that you have to leave her birthday party early to get prepared for your big meeting with the boss ... so she stops talking to you. \nYou end up watching the sunset by yourself and then go to bed early to get some rest.');
  }
  function stayAtParty(e) {
    e.preventDefault();
    alert('Great choice!!! \nThere will always be other executive meetings to prepare for, but your daughter will celebrate her 16th birthday only once in her life. \nLet her know that she is special. \n(Close out of this & click the Council Crest button.)');
  }

  return (
    <div className='venue-divs'>
      <img src={pixOregonZoo} className='pix' />
      <h1>You are at the Zoo</h1>
      <p>You are at the Zoo celebrating your daughter's 16th birthday when you get a call from your boss. <br/> You totally forgot that the big meeting with all of the executives is first thing tomorrow morning! <br/> But your daughter wants to go to Council Crest after the party and watch the sunset with her to end her very special birthday celebration. <br/><br/> What do you do?</p>
      <button onClick={doWork}>Leave to Finish Work</button>
      <button onClick={stayAtParty}>Stay with your Daughter</button>     
    </div>
  );

}

// game venue Council Crest
export function CouncilCrest(props) {

  return (
    <div className='venue-divs'>
      <img src={pixCouncilCrest} className='pix' />
      <h1>You are at Council Crest</h1>
      <p>What an exciting and fulfilling day you had. <br/> Your car is ready for evening pick up from the mechanics in time for work tomorrow and everything works out okay. <br/> Your daughter thinks that you're the best dad in the world. <br/> Your boss is pleased that you have your priorities right, and he wants to promote you for your decisiveness in looking after your daughter first.</p> 
    </div>
  );
}

// establishes default state
export default class GameApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVenue: 'pioneersquare'
    };
    this.clickHandler = this.clickHandler.bind(this);
  };

  clickHandler(newVenue) {
    this.setState({
      currentVenue: newVenue
    });
  }

  render() {
    let venue;

    if (this.state.currentVenue === 'oregonzoo') {
      venue = < OregonZoo image={this.state.image} />;
    } 
    else if (this.state.currentVenue === 'councilcrest') {
      venue = < CouncilCrest image={this.state.image} />;
    } 
    else {
      venue = < PioneerSquare image={this.state.image} />;
    }
    return (
      <div>
        <VenueSelectorBar clickHandler={this.clickHandler} />
        {venue}
      </div>
    );
  }

}
