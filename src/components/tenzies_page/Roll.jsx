export default function Roll(props) {
  return (
    <>
      <span className="total-try">Total Try: {props.totalTry}</span>
      {props.over ? (
        <button className="roll" onClick={props.newGame}>
          New Game
        </button>
      ) : (
        <button className="roll" onClick={props.shuffle}>
          Roll
        </button>
      )}
    </>
  )
}
