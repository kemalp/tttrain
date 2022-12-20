import React, { useState } from 'react';
import Board from './Board';

import './Game.scss';

const Game: React.FC = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState('');

    const handleClick = (i: number) => {
        if (winner || squares[i]) {
            return;
        }
        const newSquares = squares.slice();
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const getStatus = () => {
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
                return `Winner: ${squares[a]}`;
            }
        }
        if (squares.every(Boolean)) {
            return "It's a draw";
        }
        return `Next player: ${xIsNext ? 'X' : 'O'}`;
    };


    const resetGame = () => {
        setSquares(Array(9).fill(''));
        setXIsNext(true);
        setWinner('');
    };


    return (
        <div className="game__wrapper">
            <h1>Tic Tac Toe for RAIN</h1>
            <div className="game__board">
                <Board squares={squares} onClick={handleClick} />
            </div>
            <div className="game__info">
                <div>{getStatus()}</div>
            </div>
            <button onClick={resetGame}>Reset game</button>
        </div>
    );
};

export default Game;
