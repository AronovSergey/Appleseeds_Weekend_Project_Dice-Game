import React from 'react';

const ActionButton = ({ children, value }) => {
    return (
        <button>
            {children}
            {value}
        </button>
    )
}

export default ActionButton;
