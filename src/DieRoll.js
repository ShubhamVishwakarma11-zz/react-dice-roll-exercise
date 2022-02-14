import React, {Component} from 'react';
import Die from './Die';
import './DieRoll.css';

class DieRoll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            die1: 1,
            die2: 6,
            rolling: false
        }
        this.rollDice = this.rollDice.bind(this);
    }

    rollDice() {
        let randnum1 = Math.floor(Math.random() * 6) + 1;
        let randnum2 = Math.floor(Math.random() * 6) + 1;
        this.setState({die1:randnum1, die2: randnum2, rolling: true});
        setTimeout(()=> {
            this.setState({rolling: false});
        }, 1000);
    }

    render() {
        const dice = [
            '', 'one', 'two', 'three', 'four', 'five', 'six'
        ];

        return (
            <div>
                <div className = "row">
                    <div className="col-3"> </div>
                    <Die die = {dice[this.state.die1]} wobble={this.state.rolling} />
                    <Die die= {dice[this.state.die2]} wobble={this.state.rolling} />
                    <div className="col-3"> </div>
                </div>
                
                <button 
                    onClick={this.rollDice} 
                    className='btn btn-lg roll-btn' 
                    disabled={this.state.rolling}
                > 
                    {(this.state.rolling)
                    ? ("Rolling...")
                    : ("Roll Dice!")
                    } 
                </button>
            </div>
        )
    }
}

export default DieRoll;