import React from 'react';

const ActionButton = ({ children, value, action }) => {
    return (
        <button
            onClick={action}
        >
            {children}
            {value}
        </button>
    )
}

export default ActionButton;
