import React, { Component } from 'react';
import ActionPanel from '../ActionPanel/ActionPanel';
import Player from '../Player/Player';

import './Board.css'

const initialState = {
    dices: [1, 1],
    firstPlayerScore: 0,
    secondPlayerScore: 0,
    isItFirstPlayerTurn: true,
    hasRolled: false,
    finalScore: 100,
}

class Board extends Component {
    state = { ...initialState }

    onRollDice() {
        const newDices = [getRndInteger(1, 7), getRndInteger(1, 7)]

        this.setState({
            dices: newDices,
            hasRolled: true,
        })

        if(newDices[0] === newDices[1]) { 
            const onSameValue = this.onSameValue.bind(this)
            setTimeout(onSameValue, 600) 
        }
        
        
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }
    }

    onHold() {
        const { dices, firstPlayerScore, secondPlayerScore, isItFirstPlayerTurn } = this.state;
        this.setState({
            isItFirstPlayerTurn: !isItFirstPlayerTurn,
            firstPlayerScore: (isItFirstPlayerTurn ?
                                 firstPlayerScore + dices[0] + dices[1] : firstPlayerScore),
            secondPlayerScore: (!isItFirstPlayerTurn ?
                                    firstPlayerScore + dices[0] + dices[1] : secondPlayerScore),
            dices: [1, 1],
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
                    dices={this.state.dices}
                    myTurn={this.state.isItFirstPlayerTurn}
                    hasRolled={this.state.hasRolled}
                    hasWon={gameIsEnded ? 
                                (firstPlayerScore > secondPlayerScore ? 'won' : 'loss') :
                                'in-game'
                    }
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
                    dices={this.state.dices}
                    myTurn={!this.state.isItFirstPlayerTurn}
                    hasRolled={this.state.hasRolled}
                    hasWon={gameIsEnded ? 
                        (secondPlayerScore > firstPlayerScore ? 'won' : 'loss') :
                        'in-game'
                    }
                />
            </div>
        )
    }
}

export default Board;