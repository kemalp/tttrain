import React, { useState } from 'react';
import Square from './Square';

import './Board.scss';

interface BoardProps {
    squares: string[];
    onClick: (i: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
    const renderSquare = (i: number) => {
        return <Square value={squares[i]} onClick={() => onClick(i)} />;
    };

    return (
        <div className="board__wrapper">
            <div className="board__row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board__row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board__row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

export default Board;
