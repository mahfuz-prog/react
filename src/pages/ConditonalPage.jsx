import { useState } from "react"

export default function Conditonal() {
  const [messages, setMessages] = useState(["a", "b"])
  // Challenge:
  // If there are no unread messages, display "You're all caught up'.
  // If there's exactly 1 unread message,
  // it should read "You have 1 unread message" (singular)
  // if there are > 1 unread mesages, display "You have <n> unread messages"

  function showText() {
    if (messages.length === 0) {
      return "You're all caught up"
    } else if (messages.length === 1) {
      return "You have 1 unread message"
    } else {
      return `You have ${messages.length} unread messages`
    }
  }

  function handleClick() {
    setMessages((prev) => prev.slice(0, -1))
  }

  return (
    <section>
      <p>{showText()}</p>
      <button onClick={handleClick}>Read Message</button>
    </section>
  )
}
