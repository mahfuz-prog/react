import { useState, useRef, useEffect } from "react"
import { nanoid } from "nanoid"

import Confetti from "react-confetti"
import Header from "../components/tenzies_page/Header"
import Die from "../components/totorail_tenzies_page/Die"
import Roll from "../components/totorail_tenzies_page/Roll"

export default function TutorialTenziesPage() {
  // by () => generateAllNewDice() doing this when the dice state changes
  // react doesn't call generateAllNewDice function every time when the state change
  // it only call it once
  const [dice, setDice] = useState(() => generateAllNewDice())
  const [totalTry, setTotalTry] = useState(0)
  const buttonRef = useRef(null)

  // game wining conditions
  // this variable update based on dice state change.
  // because changing the dice state cause re run the entire code of this function
  // thats why we don't need a sideEffect here!
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value)

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus()
    }
  }, [gameWon])

  function generateAllNewDice() {
    return Array.from({ length: 10 }, () => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }))
  }

  // roll dice which is not Held
  function rollDice() {
    if (gameWon) {
      setTotalTry(0)
      setDice(generateAllNewDice())
      return
    }

    setTotalTry((prev) => prev + 1)
    setDice((oldDice) =>
      oldDice.map((dice) =>
        !dice.isHeld
          ? {
              ...dice,
              value: Math.ceil(Math.random() * 6),
            }
          : dice,
      ),
    )
  }

  // select dice functionality
  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((dice) =>
        dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice,
      ),
    )
  }

  return (
    <div className="tenzies-page">
      {gameWon && <Confetti />}
      <Header />
      <Die dice={dice} hold={hold} />
      <Roll
        rollDice={rollDice}
        totalTry={totalTry}
        gameWon={gameWon}
        ref={buttonRef}
      />
    </div>
  )
}
