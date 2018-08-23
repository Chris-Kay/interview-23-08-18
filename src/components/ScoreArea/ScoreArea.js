import React from 'react';
import Team from './Team/Team';
import Score from './Score/Score';
import './ScoreArea.css';

const scoreArea = props => {
    return (
        <div className="score-area">
          <Team name={props.team1} />
          <Score score={props.score1} />
          <Score score={props.score2} />
          <Team name={props.team2} />
        </div>
    );
}

export default scoreArea;
