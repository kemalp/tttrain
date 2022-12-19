import React, { useState } from 'react';
import Board from './Board';

const Game: React.FC = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i: number) => {
        const newSquares = squares.slice();

        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    let status;
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={squares} onClick={handleClick} />
            </div>
            <div className="game-info">
                <div>{status}</div>
            </div>
        </div>
    );
};

export default Game;
