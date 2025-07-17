import Square from './Square';
import { useCallback, useMemo } from 'react';

// Winning combinations - moved outside component to prevent recreation
const WINNING_LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Memoized winner calculation
function calculateWinner(squares) {
    for (const [a, b, c] of WINNING_LINES) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

// Memoized Square component to prevent unnecessary re-renders
const MemoizedSquare = ({ value, onClick }) => (
    <Square value={value} onClick={onClick} />
);

function Board({ xIsNext, squares, onPlay }) {
    // Memoized winner calculation
    const winner = useMemo(() => calculateWinner(squares), [squares]);
    
    // Memoized status message
    const status = useMemo(() => {
        if (winner) {
            return `Winner: ${winner}`;
        }
        return `Next player: ${xIsNext ? 'X' : 'O'}`;
    }, [winner, xIsNext]);

    // Memoized click handler
    const handleClick = useCallback((i) => {
        if (winner || squares[i]) {
            return;
        }
        
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares);
    }, [squares, xIsNext, winner, onPlay]);

    // Memoized board rows to prevent unnecessary re-renders
    const boardRows = useMemo(() => {
        const rows = [];
        for (let i = 0; i < 3; i++) {
            const rowSquares = [];
            for (let j = 0; j < 3; j++) {
                const index = i * 3 + j;
                rowSquares.push(
                    <MemoizedSquare
                        key={index}
                        value={squares[index]}
                        onClick={() => handleClick(index)}
                    />
                );
            }
            rows.push(
                <div key={i} className="board-row">
                    {rowSquares}
                </div>
            );
        }
        return rows;
    }, [squares, handleClick]);

    return (
        <>
            <div className="status">{status}</div>
            {boardRows}
        </>
    );
}

export default Board;