export default function Die(props) {
  const diceElements = props.dice.map((item) => (
    <button
      className={`dice ${item.isHeld ? "active" : undefined}`}
      key={item.id}
      onClick={() => props.hold(item.id)}
    >
      <p>{item.value}</p>
    </button>
  ))
  return <div className="dices">{diceElements}</div>
}
