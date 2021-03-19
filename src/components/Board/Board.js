import React, { Component } from 'react';
import ActionPanel from '../ActionPanel/ActionPanel';
import Player from '../Player/Player';

import './Board.css'

class Board extends Component {
    state = {
        dices: [1, 1],
        firstPlayerScore: 2,
        secondPlayerScore: 3,

    }

    render() {
        return (
            <div className="board">
                <Player 
                    score={this.state.firstPlayerScore}
                    dices={this.state.dices}
                />
                <br />
                <ActionPanel 
                    dices={this.state.dices}
                />
                <br />
                <Player 
                    score={this.state.secondPlayerScore}
                    dices={this.state.dices}
                />
            </div>
        )
    }
}

export default Board;