import React, { useState } from "react"
import { generate } from "random-words"
import { nanoid } from "nanoid"

import Header from "../components/endgame_page/Header"
import ProgrammingWorld from "../components/endgame_page/ProgrammingWorld"
import Guess from "../components/endgame_page/Guess"
import Choices from "../components/endgame_page/Choices"
import Notification from "../components/endgame_page/Notification"

export default function Endgame() {
  const [keyboard, setKeyboard] = useState(() => generateKeyboard())
  const MAX_ATTEMPTS = 8
  const [attempts, setAttempts] = useState(0)
  const [word, setWord] = useState(generateWord())

  // filter all the right guesses
  const guessedLetters = keyboard
    .filter((key) => key.rightGuess)
    .map((key) => key.value)
  // check every latter present in guesses
  const hasWon = word
    .split("")
    .every((letter) => guessedLetters.includes(letter))
  const gameOver = attempts >= MAX_ATTEMPTS

  // initialize the keyboard
  function generateKeyboard() {
    return Array.from({ length: 26 }, (_, i) => ({
      id: nanoid(),
      value: String.fromCharCode(i + 65),
      wrongGuess: false,
      rightGuess: false,
    }))
  }

  // generate a guess word
  function generateWord() {
    return generate({ minLength: 3, maxLength: 5 }).toUpperCase()
  }

  // handle click on keyboard
  function handleChoices(id) {
    const clickedKey = keyboard.find((key) => key.id === id)

    // if game over or win return the control
    if (gameOver || hasWon) return

    // if the char is already clicked than return the control
    if (clickedKey.rightGuess || clickedKey.wrongGuess) return

    // check if the word contain the guess latter
    const isCorrect = word.includes(clickedKey.value)

    setKeyboard((prev) =>
      prev.map((key) =>
        key.id === id
          ? { ...key, rightGuess: isCorrect, wrongGuess: !isCorrect }
          : key,
      ),
    )

    // increase an attempts if wrong guess
    if (!isCorrect) {
      setAttempts((prev) => prev + 1)
    }
  }

  // new game button click all set to initial state
  function newGame() {
    setKeyboard(generateKeyboard())
    setAttempts(0)
    setWord(generateWord())
  }

  return (
    <div className="endgame">
      <Header />
      <Notification hasWon={hasWon} gameOver={gameOver} />
      <ProgrammingWorld attempts={attempts} />
      <Guess guessedLetters={guessedLetters} word={word} gameOver={gameOver} />
      <Choices keyboard={keyboard} handleChoices={handleChoices} />
      {gameOver || hasWon ? (
        <button onClick={newGame} className="new-endgame">
          New Game
        </button>
      ) : null}
    </div>
  )
}
