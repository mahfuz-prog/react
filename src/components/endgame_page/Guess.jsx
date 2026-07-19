export default function Guess(props) {
  const guessElements = props.word.split("").map((char, idx) => {
    const isGuessed = props.guessedLetters.includes(char)
    const isMissed = props.gameOver && !isGuessed

    return (
      <div key={idx} className={`item ${isMissed ? "missed" : ""}`}>
        {props.gameOver || isGuessed ? char : ""}
      </div>
    )
  })

  return <div className="disply-output">{guessElements}</div>
}
