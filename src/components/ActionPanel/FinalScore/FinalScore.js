import React, { useState } from 'react';

const FinalScore = ({ value, action }) => {
    const [localValue, setLocalValue] = useState(value);

    function onInputChange(event) {
        setLocalValue(event.target.value);
        action(event.target.value);
    }

    return (
        <input 
            type="number" 
            name="finalScore" 
            value={localValue} 
            onChange={(event) => onInputChange(event)}
        />
    )
}

export default FinalScore;
