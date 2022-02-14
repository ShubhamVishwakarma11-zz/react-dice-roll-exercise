import React, {Component} from 'react';
import './Die.css';

class Die extends Component {
    render() {
        return (
            <div className='die-icon-container col-3'> 
                <i className={`fas 
                    fa-dice-${this.props.die} 
                    die-icon
                    ${this.props.wobble && "wobble-dice"}
                    `}></i>
            </div>
        )
    }
}

export default Die;