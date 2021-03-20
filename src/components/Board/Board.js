import React, { Component } from 'react';
import ActionPanel from '../ActionPanel/ActionPanel';
import Player from '../Player/Player';

import './Board.css'

const initialState = {
    dices: [1, 1],
    firstPlayerScore: 0,
    secondPlayerScore: 0,
    firstPlayerCurrent: 0,
    secondPlayerCurrent: 0,
    isItFirstPlayerTurn: true,
    hasRolled: false,
    finalScore: 100,
}

class Board extends Component {
    state = { ...initialState }

    onRollDice() {
        const newDices = [getRndInteger(1, 7), getRndInteger(1, 7)];
        const { isItFirstPlayerTurn, firstPlayerCurrent, secondPlayerCurrent } = this.state;

        this.setState({
            dices: newDices,
            hasRolled: true,
            firstPlayerCurrent: (isItFirstPlayerTurn ?
                                    firstPlayerCurrent + newDices[0] + newDices[1] : firstPlayerCurrent),
            secondPlayerCurrent: (!isItFirstPlayerTurn ?
                                    secondPlayerCurrent + newDices[0] + newDices[1] : secondPlayerCurrent),
        })

        if(newDices[0] === 6 && newDices[1] === 6) { 
            const onSameValue = this.onSameValue.bind(this);
            setTimeout(onSameValue, 800);
        }
        
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }
    }

    onHold() {
        const { firstPlayerScore, secondPlayerScore, isItFirstPlayerTurn, firstPlayerCurrent, secondPlayerCurrent } = this.state;
        this.setState({
            isItFirstPlayerTurn: !isItFirstPlayerTurn,
            firstPlayerScore: firstPlayerScore + firstPlayerCurrent,
            secondPlayerScore: secondPlayerScore + secondPlayerCurrent,
            dices: [1, 1],
            firstPlayerCurrent: 0,
            secondPlayerCurrent: 0,
            hasRolled: false,
        })
    }

    onNewGame() {
        this.setState({...initialState});
    }

    onFinalScoreChange(value){
        this.setState({ finalScore: value })
    }

    onSameValue(newDices) {
        const { firstPlayerScore, secondPlayerScore, isItFirstPlayerTurn } = this.state;
        this.setState({
            isItFirstPlayerTurn: !isItFirstPlayerTurn,
            firstPlayerScore: (isItFirstPlayerTurn ?
                                    0 : firstPlayerScore),
            secondPlayerScore: (!isItFirstPlayerTurn ?
                                    0 : secondPlayerScore),
            dices: [1, 1],
            firstPlayerCurrent: 0,
            secondPlayerCurrent: 0,
            hasRolled: false,
        })
    }

    render() {
        const { firstPlayerScore, secondPlayerScore, finalScore } = this.state;
        const gameIsEnded = Math.max(firstPlayerScore, secondPlayerScore) >= finalScore;
        return (
            <div className="board">
                <Player 
                    score={firstPlayerScore}
                    current={this.state.firstPlayerCurrent}
                    myTurn={this.state.isItFirstPlayerTurn}
                    hasRolled={this.state.hasRolled}
                    hasWon={gameIsEnded ? 
                                (firstPlayerScore > secondPlayerScore ? 'won' : 'loss') :
                                'in-game'
                    }
                    player="PLAYER 1"
                />

                <br />

                <ActionPanel 
                    dices={this.state.dices}
                    onRoll={() => this.onRollDice()}
                    onHold={() => this.onHold()}
                    onNewGame={() => this.onNewGame()}
                    finalScore={finalScore}
                    onFinalScoreChange={(value) => this.onFinalScoreChange(value)}
                />

                <br />

                <Player 
                    score={secondPlayerScore}
                    current={this.state.secondPlayerCurrent}
                    myTurn={!this.state.isItFirstPlayerTurn}
                    hasRolled={this.state.hasRolled}
                    hasWon={gameIsEnded ? 
                        (secondPlayerScore > firstPlayerScore ? 'won' : 'loss') :
                        'in-game'
                    }
                    player="PLAYER 2"
                />
            </div>
        )
    }
}

export default Board;