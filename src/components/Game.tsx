import React, { useState } from 'react';
import Board from './Board';

const Game: React.FC = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = () => {
    };

    return (
        <Board squares={squares} onClick={handleClick} />
    );
};

export default Game;
