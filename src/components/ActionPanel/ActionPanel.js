import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Dices from './Dices/Dices';
import ActionButton from './ActionButton/ActionButton';
import FinalScore from './FinalScore/FinalScore';

import './ActionPanel.css';

class ActionPanel extends Component {
    render() {
        return (
            <div className="container">
                <ActionButton
                    value="coffe"
                >
                    <FontAwesomeIcon icon={faCoffee} />
                </ActionButton>

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