import Board from "./Board";
import { useState, useCallback, useMemo } from "react";

// Constants
const INITIAL_BOARD = Array(9).fill(null);

function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([INITIAL_BOARD]);
    const [currentMove, setCurrentMove] = useState(0);
    
    const currentSquares = history[currentMove];

    // Memoized handler to prevent unnecessary re-renders
    const handlePlay = useCallback((nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }, [history, currentMove, xIsNext]);

    // Memoized jump function
    const jumpTo = useCallback((nextMove) => {
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }, []);

    // Memoized moves list to prevent unnecessary re-renders
    const moves = useMemo(() => {
        return history.map((squares, move) => {
            const description = move > 0 
                ? `Go to move #${move}` 
                : "Go to game start";
            
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>
                        {description}
                    </button>
                </li>
            );
        });
    }, [history, jumpTo]);

    return (
        <div className="game">
            <div className="game-board">
                <Board 
                    xIsNext={xIsNext} 
                    squares={currentSquares} 
                    onPlay={handlePlay}
                />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default Game;