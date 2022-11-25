import './Board.css'
import { useState } from 'react'

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

function Board() {
  const [state, setState] = useState({
    squares: Array<string>(9).fill(""),
    xIsNext: true
  })

  const handleClick = (i: number) => {
    const squares = state.squares.slice()
    squares[i] = state.xIsNext ? 'X' : 'O'
    setState({
      squares: squares,
      xIsNext: !state.xIsNext
    })
  }

  const renderSquare = (i: number) => {
    return (
      <Square
        value={state.squares[i]}
        onClick={() => handleClick(i)}
      />
    )
  }

  const winner = calculateWinner(state.squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

type SquareProps = {
  value: string
  onClick: () => void
}

function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Board
