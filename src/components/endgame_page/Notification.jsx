export default function Notification({ hasWon, gameOver }) {
  if (hasWon) {
    return (
      <div className="notification success">
        <h2>You Win!</h2>
        <p>Well done! 🎉</p>
      </div>
    )
  }

  if (gameOver) {
    return (
      <div className="notification danger">
        <h2>Game Over!</h2>
        <p>Better start learning Assembly 😭</p>
      </div>
    )
  }

  return null
}
