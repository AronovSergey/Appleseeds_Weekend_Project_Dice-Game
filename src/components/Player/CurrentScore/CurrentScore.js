import React from 'react'

const CurrentScore = ({ dices }) => {
    return (
        <div>
            CurrentScore: {dices[0] + dices[1]}
        </div>
    )
}

export default CurrentScore
