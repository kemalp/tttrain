import React, { useState } from 'react';
import Board from './Board';

import './Game.scss';

const Game: React.FC = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i: number) => {
        const newSquares = squares.slice();
        if (calculateWinner(squares) || newSquares[i]) {
            return;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const calculateWinner = (squares: string[]) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (const line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };



    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
        <div className="game__wrapper">
            <h1>Tic Tac Toe for RAIN</h1>
            <div className="game__board">
                <Board squares={squares} onClick={handleClick} />
            </div>
            <div className="game__info">
                <div>{status}</div>
            </div>
            <button onClick={() => setSquares(Array(9).fill(null))}>Reset game</button>
        </div>
    );
};

export default Game;
