import React from 'react';
import Square from './Square';
const n = 20;

class Board extends React.Component {
    renderSquare(i) {
        return (
        <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}

        />
        );
    }

    render() {
        const gameBoard = [];
        for(let i = 0; i < n**2; i+=n){
            gameBoard.push(
            <div className="board-row">
                {this.renderSquare(i)}
                {this.renderSquare(i+1)}
                {this.renderSquare(i+2)}
                {this.renderSquare(i+3)}
                {this.renderSquare(i+4)}
                {this.renderSquare(i+5)}
                {this.renderSquare(i+6)}
                {this.renderSquare(i+7)}
                {this.renderSquare(i+8)}
                {this.renderSquare(i+9)}
                {this.renderSquare(i+10)}
                {this.renderSquare(i+11)}
                {this.renderSquare(i+12)}
                {this.renderSquare(i+13)}
                {this.renderSquare(i+14)}
                {this.renderSquare(i+15)}
                {this.renderSquare(i+16)}
                {this.renderSquare(i+17)}
                {this.renderSquare(i+18)}
                {this.renderSquare(i+19)}
            </div>
            )
        }
        return (
            <div>
                {gameBoard}
            </div>
        );
    }
}

// {this.renderSquare(i+1)}
  export default Board;