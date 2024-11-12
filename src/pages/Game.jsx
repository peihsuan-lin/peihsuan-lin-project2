import React from 'react';
import { useParams } from 'react-router-dom';

function Game() {
  const { difficulty } = useParams();
  return (
    <div>
      <h1>Game Page</h1>
      <p>Playing at difficulty level: {difficulty}</p>
    </div>
  );
}

export default Game;
