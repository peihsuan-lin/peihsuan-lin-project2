import React from 'react';
import { useGame } from '../context/game-context';
import { Link } from 'react-router-dom';

export default function GameHeader() {
  const { gameStatus, resetGame } = useGame();

  return (
    <header className="game-header">
      <h2>Game Status: {gameStatus === 'won' ? "You Won!" : gameStatus === 'lost' ? "You Lost!" : "Ongoing"}</h2>
      <button onClick={resetGame}>Reset Game</button>
      <nav>
        <Link to="/game/easy">Easy</Link> |{' '}
        <Link to="/game/medium">Medium</Link> |{' '}
        <Link to="/game/hard">Hard</Link>
      </nav>
    </header>
  );
}
