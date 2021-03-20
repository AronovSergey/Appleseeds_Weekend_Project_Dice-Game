import React from 'react';
import CurrentScore from './CurrentScore/CurrentScore';
import TotalScore from './TotalScore/TotalScore';

import './Player.css'

const Player = ({ score, dices, myTurn, hasRolled, hasWon, player }) => {
    if(hasWon === 'in-game'){
        return (
            <div className={`player ${myTurn ? 'my-turn' : ''}`}>
                <div
                    style={{textAlign: "center"}}
                >
                    <span className="title">
                        {player}
                    </span>
                    <TotalScore 
                        score={score}
                    />
                </div>
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
            <div 
                className="player win-loss"
            >
                {'LOSS :('}
            </div>
        )
    }
    else {
        return(
            <div 
                className="player win-loss"
            >
                {'WIN :)'}
            </div>
        )
    }
}

export default Player;