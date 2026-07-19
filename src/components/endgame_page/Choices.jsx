export default function Choices(props) {
  const choicesElements = props.keyboard.map((item) => {
    let className = ""
    if (item.rightGuess) {
      className = "correct"
    } else if (item.wrongGuess) {
      className = "wrong"
    }

    return (
      <li
        key={item.id}
        className={className}
        onClick={() => props.handleChoices(item.id)}
      >
        {item.value}
      </li>
    )
  })

  return (
    <div className="keyboard">
      <ul>{choicesElements}</ul>
    </div>
  )
}
