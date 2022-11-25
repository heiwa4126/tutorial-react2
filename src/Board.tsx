import './Board.css'

type BoardProps = {
  squares: Array<string>
  onClick: (arg0: number) => void
}

function Board(props: BoardProps) {

  const renderSquare = (i: number) => {
    return (
      <Square
        key={i}
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    )
  }

  const renderRow = (i: number) => {
    return (
      <div className="board-row">
        {renderSquare(i)}
        {renderSquare(i + 1)}
        {renderSquare(i + 2)}
      </div>
    )
  }

  return (
    <div>
      {renderRow(0)}
      {renderRow(3)}
      {renderRow(6)}
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
