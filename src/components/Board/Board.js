import React, { Component } from 'react';
import ActionPanel from '../ActionPanel/ActionPanel';
import Player from '../Player/Player';

class Board extends Component {
    render() {
        return (
            <div>
                <Player />
                <br />
                <ActionPanel />
                <br />
                <Player />
            </div>
        )
    }
}

export default Board;