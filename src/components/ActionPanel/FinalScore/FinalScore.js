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
            value={localValue === 100 ? "" : localValue}
            placeholder="FINAL SCORE" 
            onChange={(event) => onInputChange(event)}
            className="final-score"
        />
    )
}

export default FinalScore;
