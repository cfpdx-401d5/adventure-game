import React from 'react';
import ReactDOM from 'react-dom';
const nextMove = require('./plot.js');
import './index.css';

function Choices(props) {
    const buttons = props.value.map(item => {
        return (
            <button className='buttons' key={item.id} onClick={() => props.onClick(item.id)}>{item.name}</button>
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
        console.log(value);
        console.log('STATE', this.state);
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
    
    createMarkUp(text) {
        return { __html: text };
    }

    plotComponent(text) {
        return <p dangerouslySetInnerHTML={this.createMarkUp(text)} />;
    }

    render() {
        const plot = this.state.statePlot.plot;
        const img = this.state.statePlot.image;
        const choices = this.state.statePlot.choices;
        return (
        <div className='react'>
            {this.plotComponent(plot)}
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
