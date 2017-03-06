import React from 'react';
import ReactDOM from 'react-dom';
const nextMove = require('./plot.js');
//import './index.css';

function Choices(props) {
    console.log('choice props: ', props);
    const buttons = props.value.map(item => {
        return (<li key={item.id}>
            <button id={item.id} onClick={() => props.onClick(item.id)}>{item.name}</button>
        </li>);
    });
    return (
        <ul>{buttons}</ul>
    );
}

class Story extends React.Component {
    render(props) {
        return (
        <div>
            <p id={this.props.id}>{this.props.plot}</p>
            <img src={this.props.img} alt='from the Princess Bride'/>
            <ul>
                <Choices value={this.props.choices} onclick={() => this.props.onClick()} />
            </ul>
        </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            statePlot: nextMove(props.start)
        };
    }

    handleClick(value) {
        this.setState({
            statePlot: nextMove(value)
        });
    }

    render() {
        const plot = this.state.statePlot.plot;
        const id = this.state.statePlot.id;
        const img = this.state.statePlot.image;
        const choices = this.state.statePlot.choices;
        return (
        <div>
            <Story plot={plot} id={id} img={img} choices={choices} onClick={() => this.handleClick()} />
        </div>
        );
    }
}

ReactDOM.render(
  <Game start={4}/>,
  document.getElementById('root')
);
