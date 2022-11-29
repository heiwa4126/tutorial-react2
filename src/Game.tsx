import './Game.css'
import Board from './Board'
import { useState } from 'react'

function hand(m: boolean): string {
  return m ? 'X' : 'O';
}

function Game() {
  const [state, setState] = useState({
    history: [{
      squares: Array<string>(9).fill("")
    }],
    stepNumber: 0,
    xIsNext: true
  })

  // see https://react-typescript-cheatsheet.netlify.app/docs/basic/troubleshooting/types/#using-partial-types
  const partialStateUpdate = (obj: Partial<typeof state>) =>
    setState({ ...state, ...obj });

  const handleClick = (i: number) => {
    const history = state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = hand(state.xIsNext)
    setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext,
    });
  }

  const history = state.history;
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares);
  let status: string;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (hand(state.xIsNext));
  }

  const jumpTo = (step: number) => {
    partialStateUpdate({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i: number) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

function calculateWinner(squares: string[]): string {
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
  for (const element of lines) {
    const [a, b, c] = element;
    if (squares[a] !== "" && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return "";
}

export default Game
