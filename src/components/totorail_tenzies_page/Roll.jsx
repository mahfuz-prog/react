export default function Roll(props) {
  return (
    <>
      <span className="total-try">Total Try: {props.totalTry}</span>
      <button className="roll" onClick={props.rollDice} ref={props.ref}>
        {props.gameWon ? "New Game" : "Roll Dice"}
      </button>
    </>
  )
}
