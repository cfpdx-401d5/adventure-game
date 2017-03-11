import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class PioneerScene extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getDrink(e) {
    e.preventDefault();
    alert('You had a latte with your friend and got up with the most recent gossip. Your friend drives you to the Zoo just in time for your daughter\'s party! \n (Close out of this and click Go to Zoo button)');
  }
  goToTheZoo(e) {
    e.preventDefault();

    // ReactDOM.render(
    //         <Zoo />,
    //     document.getElementById('root')
    // )
  }        
  render() {
    return (
            <div>
                <h1>Welcome to Pioneer Square!</h1>
                <img role='presentation' src='pioneer-square.jpg' />
                <p>Your daughter's birthday party is at the zoo and you are running late. You're car broke down and you are at Pioneer Square. You run into an old buddy from High School who offers to buy you coffee. Do you risk missing the max to catch up with an old friend?</p>
                {/*<button onClick={goToTheZoo}>Go to the Zoo</button>*/}
                <button onClick={this.getDrink}>Have a drink</button>
            </div>
        )
  }
}













// function Pioneer(props) {
//   function goToTheZoo(e) {
//     e.preventDefault();

//     ReactDOM.render(
//       <Zoo />,
//       document.getElementById('root')
//     )
//   }


//   }


// }