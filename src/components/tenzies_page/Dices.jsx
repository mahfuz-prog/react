export default function Dices(props) {
  return (
    <div className="dices">
      {props.dices.map((dice) => (
        <button
          className={`dice ${dice.isHeld ? "active" : ""}`}
          key={dice.id}
          name={dice.id}
          onClick={props.selectDice}
        >
          <p>{dice.number}</p>
        </button>
      ))}
    </div>
  )
}
