import React from 'react';
import './GameEvents.css';

const gameEvents = props => {
    const items = props.scorers.map((scorer) => {
        return <li className="team-scorers__scorer">{scorer}</li>;
    });

    return (
        <ul className="team-scorers">
            {items}
        </ul>
    );
}

export default gameEvents;
