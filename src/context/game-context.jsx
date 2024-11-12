import React, { createContext, useContext, useState, useCallback } from 'react';

const GameContext = createContext();
export const useGame = () => useContext(GameContext);

export const GameProvider = ({ difficulty, children }) => {

  const getBoardConfig = () => {
    switch (difficulty) {
      case 'easy':
        return { rows: 8, cols: 8, mines: 10 };
      case 'medium':
        return { rows: 16, cols: 16, mines: 40 };
      case 'hard':
        return { rows: 16, cols: 30, mines: 99 };
      default:
        return { rows: 0, cols: 0, mines: 0 };
    }
  };

  const { rows, cols, mines } = getBoardConfig();

  const initializeBoard = useCallback(() => {
    return Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        isMine: false,
        isRevealed: false,
        neighborMines: 0,
      }))
    );
  }, [rows, cols]);

  const [board, setBoard] = useState(initializeBoard);
  const [gameStatus, setGameStatus] = useState('ongoing');

  const resetGame = useCallback(() => {
    setBoard(initializeBoard());
    setGameStatus('ongoing');
  }, [initializeBoard]);

  const handleCellClick = (row, col) => {
    // Placeholder: Logic for revealing cells and updating game status
  };

  return (
    <GameContext.Provider
      value={{
        board,
        gameStatus,
        initializeBoard,
        resetGame,
        handleCellClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
