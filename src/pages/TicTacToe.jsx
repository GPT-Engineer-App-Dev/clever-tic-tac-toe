import { useState } from 'react';
import { Box, Button, Grid, Text } from '@chakra-ui/react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(i) {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function renderSquare(i) {
    return (
      <Button onClick={() => handleClick(i)} size="lg" p={8}>
        {board[i]}
      </Button>
    );
  }

  return (
    <Box textAlign="center" mt={10}>
      <Text fontSize="2xl" mb={4}>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {Array(9).fill(null).map((_, i) => (
          <Box key={i} w="40px" h="40px">
            {renderSquare(i)}
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default TicTacToe;