import React from 'react';
import { useParams } from 'react-router-dom';
import { GameProvider } from '../context/game-context';
import GameHeader from '../components/game-header';
import Board from '../components/board';

export default function Game() {
  const { difficulty } = useParams();

  return (
    <GameProvider difficulty={difficulty} key={difficulty}>
      <div className="game">
        <GameHeader />  {/* Displays game status, reset, and difficulty links */}
        <Board />       {/* Displays the Minesweeper grid */}
      </div>
    </GameProvider>
  );
}
