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
    const board = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        isMine: false,
        isRevealed: false,
        neighborMines: 0,
      }))
    );

    // Place mines randomly on the board
    let minesPlaced = 0;
    while (minesPlaced < mines) {
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol = Math.floor(Math.random() * cols);

      if (!board[randomRow][randomCol].isMine) {
        board[randomRow][randomCol].isMine = true;
        minesPlaced++;

        // Update neighbor mine counts for surrounding cells
        for (let r = randomRow - 1; r <= randomRow + 1; r++) {
          for (let c = randomCol - 1; c <= randomCol + 1; c++) {
            if (r >= 0 && r < rows && c >= 0 && c < cols && !board[r][c].isMine) {
              board[r][c].neighborMines++;
            }
          }
        }
      }
    }

    return board;
  }, [rows, cols, mines]);

  const [board, setBoard] = useState(initializeBoard);
  const [gameStatus, setGameStatus] = useState('ongoing');
  const [revealedCount, setRevealedCount] = useState(0);

  const resetGame = useCallback(() => {
    setBoard(initializeBoard());
    setGameStatus('ongoing');
    setRevealedCount(0);
  }, [initializeBoard]);

  const revealAdjacentSafeCells = (newBoard, row, col) => {
    const directions = [
      [-1, 0], [1, 0], [0, -1], [0, 1], // orthogonal neighbors
      [-1, -1], [-1, 1], [1, -1], [1, 1] // diagonal neighbors
    ];

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      // Check if the cell is within bounds and not already revealed
      if (
        newRow >= 0 && newRow < rows &&
        newCol >= 0 && newCol < cols &&
        !newBoard[newRow][newCol].isRevealed &&
        !newBoard[newRow][newCol].isMine
      ) {
        newBoard[newRow][newCol].isRevealed = true;
        setRevealedCount((count) => count + 1);

        // If the neighboring cell has no mines around it, reveal its neighbors as well
        if (newBoard[newRow][newCol].neighborMines === 0) {
          revealAdjacentSafeCells(newBoard, newRow, newCol);
        }
      }
    }
  };

  const handleCellClick = (row, col) => {
    if (gameStatus !== 'ongoing' || board[row][col].isRevealed) return;

    setBoard((prevBoard) => {
      // Clone the board to ensure immutability
      const newBoard = prevBoard.map((boardRow) => boardRow.map((cell) => ({ ...cell })));

      // Reveal the clicked cell
      if (newBoard[row][col].isMine) {
        setGameStatus('lost'); // End game if a mine is clicked
        newBoard[row][col].isRevealed = true;
      } else {
        newBoard[row][col].isRevealed = true;
        setRevealedCount((count) => count + 1); // Track revealed cells for win condition

        // If cell has 0 neighboring mines, reveal adjacent cells
        if (newBoard[row][col].neighborMines === 0) {
          revealAdjacentSafeCells(newBoard, row, col);
        }
      }

      // Check for win condition: all non-mine cells revealed
      const totalSafeCells = rows * cols - mines;
      if (revealedCount + 1 === totalSafeCells) {
        setGameStatus('won');
      }

      return newBoard;
    });
  };

  return (
    <GameContext.Provider
      value={{
        board,
        gameStatus,
        resetGame,
        handleCellClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
