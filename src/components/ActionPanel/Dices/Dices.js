import React from 'react';
import Die from './Die.js/Die';

const Dices = ({ dices }) => {
    return (
        <div className="dices">
            <Die 
                number={dices[0]}
            />
            <Die 
                number={dices[1]}
            />
        </div>
    );
}

export default Dices;
