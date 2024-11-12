import React from 'react';
import { useGame } from '../context/game-context';
import '../styles/cell.css'; // Importing cell-specific styles

export default function Cell({ row, col, cellData }) {
  const { handleCellClick } = useGame();

  const handleClick = () => {
    handleCellClick(row, col);
  };

  return (
    <div
      className={`cell ${cellData.isRevealed ? 'revealed' : ''} ${cellData.isMine ? 'mine' : ''}`}
      onClick={handleClick}
    >
      {cellData.isRevealed ? (cellData.isMine ? '💣' : cellData.neighborMines || '') : ''}
    </div>
  );
}
