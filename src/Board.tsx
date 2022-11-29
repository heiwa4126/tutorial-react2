import './Board.css'

interface BoardProps {
  squares: Array<string>
  onClick: (arg0: number) => void
}

function Board(props: BoardProps) {

  const renderSquare = (i: number) => {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    )
  }

  const renderRow = (i: number) => {
    let col = []
    for (let j = 0; j < 3; ++j) {
      col.push(renderSquare(i + j))
    }
    return (
      <div className="board-row">{col}</div >
    )
  }

  let col = []
  for (let j = 0; j < 3; ++j) {
    col.push(renderRow(j * 3))
  }

  return (<div>{col}</div>)
}

interface SquareProps {
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
