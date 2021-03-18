import React, { Component } from 'react';
import CurrentScore from './CurrentScore/CurrentScore';
import TotalScore from './TotalScore/TotalScore';

class Player extends Component {
    render() {
        return (
            <div>
                <TotalScore />
                <CurrentScore />
            </div>
        )
    }
}
export default Player;