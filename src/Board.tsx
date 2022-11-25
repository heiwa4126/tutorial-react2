import './Board.css'
import { useState } from 'react'

function Board() {
  const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value="0" />
        <Square value="1" />
        <Square value="2" />
      </div>
      <div className="board-row">
        <Square value="3" />
        <Square value="4" />
        <Square value="5" />
      </div>
      <div className="board-row">
        <Square value="6" />
        <Square value="7" />
        <Square value="8" />
      </div>
    </div>
  )
}

type SquareProps = {
  value?: string
}
const SquareDefault: SquareProps = {
  value: "0"
}

function Square(SquareDefault: SquareProps) {
  const [state, setState] = useState({ value: "" })

  return (
    <button className="square" onClick={() => setState({ value: 'X' })}>
      {state.value}
    </button>
  )
}

export default Board
