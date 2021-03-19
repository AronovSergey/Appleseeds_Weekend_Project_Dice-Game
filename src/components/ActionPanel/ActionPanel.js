import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSync, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import Dices from './Dices/Dices';
import ActionButton from './ActionButton/ActionButton';
import FinalScore from './FinalScore/FinalScore';

import './ActionPanel.css';

class ActionPanel extends Component {
    render() {
        return (
            <div className="container">
                <ActionButton
                    value="NEW GAME"
                    action={this.props.onNewGame}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </ActionButton>

                <Dices 
                    dices={this.props.dices}
                />

                <ActionButton
                    value="ROLL DICE"
                    action={this.props.onRoll}
                >
                    <FontAwesomeIcon icon={faSync} />
                </ActionButton>

                <ActionButton
                    value="HOLD"
                    action={this.props.onHold}
                >
                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                </ActionButton>

                <FinalScore 
                    value={this.props.finalScore}
                    action={this.props.onFinalScoreChange}
                />
            </div>
        );
    }
}

export default ActionPanel;