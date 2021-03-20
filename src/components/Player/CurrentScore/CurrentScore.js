import React from 'react'

const CurrentScore = ({ dices, myTurn, hasRolled }) => {
    return (
        <div className="current">
            Current:
            <br />
            {myTurn && hasRolled ? dices[0] + dices[1] : 0}
        </div>
    )
}

export default CurrentScore
