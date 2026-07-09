import { useState, useEffect } from "react"
import Header from "../components/tenzies_page/Header"
import Dices from "../components/tenzies_page/Dices"
import Roll from "../components/tenzies_page/Roll"

export default function Tenzies() {
  const [dices, setDices] = useState([])
  const [over, setOver] = useState(false)
  const [totalTry, setTotalTry] = useState(0)
  const [resetGame, setResetGame] = useState(false)

  // when mounted set numbers to the state
  useEffect(() => {
    setDices(
      Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)).map(
        (number, idx) => ({
          id: idx + 1,
          number: number,
          isHeld: false,
        }),
      ),
    )
  }, [resetGame])

  // game over functionality
  useEffect(() => {
    if (dices.length < 1) {
      return
    }
    const allHeld = dices.every((dice) => dice.isHeld)
    const firstValue = dices[0].number
    const allSameValue = dices.every((dice) => dice.number === firstValue)

    if (allHeld && allSameValue) {
      setOver(true)
    }
  }, [dices])

  // select a dice
  function selectDice(e) {
    // if all dice selected than disable unselect option
    if (dices.every((dice) => dice.isHeld)) {
      return
    }

    const id = Number(e.currentTarget.name)

    // Find the specific dice that the user just clicked
    const clickedDice = dices[id - 1]

    // Check if there are already any dice being held
    // it always find the first selected dice
    const heldDice = dices.find((dice) => dice.isHeld)

    // Determine the "allowed" number.
    // If a dice is already held, use its number. Otherwise, any number is allowed.
    const allowedNumber = heldDice ? heldDice.number : null

    // Only update state if:
    //  - The user is unholding a die they already selected (clickedDice.isHeld is true)
    //  - OR no dice are held yet (allowedNumber === null)
    //  - OR the clicked dice matches the currently held target number
    if (
      clickedDice.isHeld ||
      allowedNumber === null ||
      clickedDice.number === allowedNumber
    ) {
      setDices((prev) =>
        prev.map((dice) => {
          return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
        }),
      )
    }
  }

  function shuffle() {
    setTotalTry((prev) => prev + 1)
    // shuffle all dice except the selected
    setDices((prev) =>
      prev.map((dice) => {
        if (dice.isHeld) {
          return dice
        }

        return {
          ...dice,
          number: Math.floor(Math.random() * 10),
        }
      }),
    )
  }

  // set everthing new for new game
  function newGame() {
    setOver(false)
    setTotalTry(0)
    setResetGame((prev) => !prev)
  }
  return (
    <main className="tenzies-page">
      <Header />
      <Dices dices={dices} selectDice={selectDice} />
      <Roll
        shuffle={shuffle}
        over={over}
        newGame={newGame}
        totalTry={totalTry}
      />
    </main>
  )
}
