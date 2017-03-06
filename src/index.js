import React from 'react';
import ReactDOM from 'react-dom';
const nextMove = require('./plot.js');
//import './index.css';

function Choices(props) {
    const buttons = props.value.map(item => {
        return (
            <button key={item.id} onClick={() => props.onClick(item.id)}>{item.name}</button>
        );
    });
    return (
        <ul>{buttons}</ul>
    );
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            statePlot: nextMove(props.start)
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(value) {
        if (value === 42) {
            this.setState({
                statePlot: nextMove(1)
            });
        } else {
            this.setState({
                statePlot: nextMove(value)
            });
        }
        
    }
    
    render() {
        const plot = this.state.statePlot.plot;
        const id = this.state.statePlot.id;
        const img = this.state.statePlot.image;
        const choices = this.state.statePlot.choices;
        return (
        <div>
            <p id={id}>{plot}</p>
            <img src={img} alt='from the Princess Bride'/>
            <Choices value={choices} onClick={this.handleClick} />
        </div>
        );
    }
}

ReactDOM.render(
  <Game start={1}/>,
  document.getElementById('root')
);

Choices.propTypes = {
    value: React.PropTypes.array,
};

Game.constructor.propTypes = {
    start: React.PropTypes.string,
};
