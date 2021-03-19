import React from 'react';

const Die = ({ number }) => {
    return (
        <img 
            className="die"
            src={`./Images/dice-${number}.png`}
            alt={number}
        />
    )
}

export default Die;
