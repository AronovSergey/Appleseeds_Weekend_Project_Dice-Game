import React from 'react';
import CurrentScore from './CurrentScore/CurrentScore';
import TotalScore from './TotalScore/TotalScore';

import './Player.css'

const Player = ({ score, dices }) => {
    return (
        <div className="player">
            <TotalScore 
                score={score}
            />
            <CurrentScore 
                dices={dices}
            />
        </div>
    )
}

export default Player;