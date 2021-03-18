import React, { Component } from 'react';
import Dices from '../Dices/Dices';
import ActionButton from './ActionButton/ActionButton'
import FinalScore from './FinalScore/FinalScore';

class ActionPanel extends Component {
    render() {
        return (
            <div>
                <ActionButton />
                <Dices />
                <ActionButton />
                <ActionButton />
                <FinalScore />
            </div>
        );
    }
}

export default ActionPanel;