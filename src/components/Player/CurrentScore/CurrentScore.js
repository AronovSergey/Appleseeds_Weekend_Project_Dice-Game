import React from 'react'

const CurrentScore = ({ current, myTurn, hasRolled }) => {
    return (
        <div className="current">
            Current:
            <br />
            {myTurn && hasRolled ? current : 0}
        </div>
    )
}

export default CurrentScore
