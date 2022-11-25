import './Board.css'
import { useState } from 'react'

function Board() {
  const [state, setState] = useState({
    squares: Array<string>(9).fill(""),
    xIsNext: true
  })
  const status = 'Next player: X'

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
