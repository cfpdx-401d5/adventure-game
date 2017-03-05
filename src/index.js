import React from 'react';
import ReactDOM from 'react-dom';
const plot = require('./plot.js');
//import './index.css';

function Choices(props) {
    console.log('choices props: ', props);
    const buttons = props.value.map(item => {
        return (<li key={item.id}>
            <button id={item.id}>{item.name}</button>
        </li>);
    });
    return (
        <ul>{buttons}</ul>
    );
}

function Story(props) {
    console.log('story props: ', props);
    return (
        <div>
            <p id={props.story.id}>{props.story.plot}</p>
            <img src={props.story.image} alt='from the Princess Bride'/>
            <ul>
                <Choices value={props.story.choices} />
            </ul>
        </div>
    );
}

function Game() {
    const state = plot(4);
    return (
        <div>
            <Story story={state[0]} />
        </div>
    );
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
