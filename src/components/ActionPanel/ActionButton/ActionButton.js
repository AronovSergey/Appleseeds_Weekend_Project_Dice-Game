import React from 'react';

const ActionButton = ({ children, value, action }) => {
    return (
        <button
            onClick={action}
            className="btn"
        >
            <div
                className="btn-icon"
            >
                {children}
            </div>
            {value}
        </button>
    )
}

export default ActionButton;
