import React, { Component } from 'react';
import './App.css';
import MetaData from './components/MetaData/MetaData';
import ScoreArea from './components/ScoreArea/ScoreArea';
import GameDetails from './components/GameDetails/GameDetails';

class App extends Component {
  render() {
    return (
      <div className="scoreboard">
        <MetaData date="Wed 22nd Aug 2018" league="Championship" />
        <ScoreArea
          team1="Bolton"
          team2="Stoke"
          score1="10"
          score2="0"
        />
        <GameDetails />
      </div>
    );
  }
}

export default App;
