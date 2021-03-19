import React, { Component } from 'react';
import Dices from './Dices/Dices';
import ActionButton from './ActionButton/ActionButton';
import FinalScore from './FinalScore/FinalScore';

import './ActionPanel.css';
;
class ActionPanel extends Component {
    render() {
        return (
            <div className="container">
                <ActionButton />
                <Dices 
                    dices={this.props.dices}
                />
                <ActionButton />
                <ActionButton />
                <FinalScore />
            </div>
        );
    }
}

export default ActionPanel;