import React from 'react';
import GameEvents from './GameEvents.js/GameEvents';
import GameStatus from '../GameStatus/GameStatus';
import './GameDetails.css';

const gameDetails = props => {
    return (
        <aside className="game-details">
          <GameEvents scorers={['Someone (5)', 'someone else (22)']} />
          <GameStatus gamePoint="FT" halfTimeScore="HT: 1-0" />
          <GameEvents scorers={['Someone (6)', 'someone else (8)']} />
        </aside>
    );
}

export default gameDetails;
