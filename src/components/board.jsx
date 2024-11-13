import React from 'react';
import { useGame } from '../context/game-context';
import Cell from './cell';
import '../styles/board.css';

export default function Board() {
  const { board } = useGame();

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cellData, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              row={rowIndex}
              col={colIndex}
              cellData={cellData}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
