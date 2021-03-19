import React from 'react'

const CurrentScore = ({ dices, myTurn, hasRolled }) => {
    return (
        <div>
            CurrentScore: {myTurn && hasRolled ? dices[0] + dices[1] : 0}
        </div>
    )
}

export default CurrentScore
