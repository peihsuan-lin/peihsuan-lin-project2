import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useGame } from '../context/game-context';
import '../styles/cell.css';

export default function Cell({ row, col, cellData }) {
  const { handleCellClick } = useGame();

  const handleClick = () => {
    handleCellClick(row, col);
  };

  const cellClass = `
    cell 
    ${cellData.isRevealed ? 'revealed' : 'unrevealed'} 
    ${cellData.isMine ? 'mine' : cellData.neighborMines > 0 ? `number-${cellData.neighborMines}` : ''}
  `;

  return (
    <Paper
      elevation={3}
      onClick={handleClick}
      className={cellClass}
      sx={{
        borderRadius: 0,
        backgroundColor: cellData.isRevealed && cellData.isMine ? '#f28b82' : undefined,
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        {cellData.isRevealed ? (cellData.isMine ? '💣' : cellData.neighborMines || '') : ''}
      </Typography>
    </Paper>
  );
}
