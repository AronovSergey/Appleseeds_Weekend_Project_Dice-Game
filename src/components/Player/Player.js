import React from 'react';
import CurrentScore from './CurrentScore/CurrentScore';
import TotalScore from './TotalScore/TotalScore';

import './Player.css'

const Player = ({ score, dices, myTurn, hasRolled, hasWon }) => {
    if(hasWon === 'in-game'){
        return (
            <div className={`player ${myTurn ? 'my-turn' : ''}`}>
                <TotalScore 
                    score={score}
                />
                <CurrentScore 
                    dices={dices}
                    myTurn={myTurn}
                    hasRolled={hasRolled}
                />
            </div>
        )
    }
    else if(hasWon === 'won'){
        return(
            <div className="player">
                {'won :)'}
            </div>
        )
    }
    else {
        return(
            <div className="player">
                {'loss :('}
            </div>
        )
    }
}

export default Player;