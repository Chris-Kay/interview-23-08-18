import React from 'react';
import './GameStatus.css';

const gameStatus = props => {

    return (
        <div className="game-status">
            {
                props.gamePoint &&
                <span className="game-status__point">{props.gamePoint}</span>
            }
            {
                props.halfTimeScore &&
                <span className="game-status__half-time">{props.halfTimeScore}</span>
            }
        </div>
    );
}

export default gameStatus;
