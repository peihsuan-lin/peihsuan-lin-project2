import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Rules() {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
      Welcome to Minesweeper! Here's how to play:
      </Typography>
      <Typography >
        <ol>
          <li>When you click on a cell, one of two things will happen:
            <ul>
              <li><strong>A number appears:</strong> This number tells you how many bombs are adjacent to that cell (including diagonals).</li>
              <li><strong>A bomb explodes:</strong> If you click on a bomb, you lose the game.</li>
              <li><strong>An empty space:</strong> If you click on an empty cell, the neighboring empty cells will be uncovered.</li>
            </ul>
          </li>
          <li><strong>Winning:</strong> You win when all non-bomb cells are revealed. </li>
          <li><strong>Losing:</strong> If you click on a bomb, you’ll lose.</li>
        </ol>
      </Typography>

      <Typography >
        <strong>Difficulty Levels:</strong>
        <ul>
          <li>Easy: 8x8, Bombs: 10 </li>
          <li>Medium: 16x16, Bombs: 40 </li>
          <li>Hard: 30x16, Bombs: 99 </li>
        </ul>
      </Typography>

      <Typography >
        Good luck and enjoy the game!
      </Typography>
    </div>
  );
}
