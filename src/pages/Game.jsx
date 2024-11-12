import React from 'react';
import Typography from '@mui/material/Typography';
import { useParams, Link } from 'react-router-dom';

export default function Game() {
  const { difficulty } = useParams();

  return (
    <div>
      <Typography variant="h4">Playing at difficulty level: {difficulty}</Typography>
      <div>
        <Link to="/game/easy">Easy</Link> |{' '}
        <Link to="/game/medium">Medium</Link> |{' '}
        <Link to="/game/hard">Hard</Link>
      </div>
    </div>
  );
}
