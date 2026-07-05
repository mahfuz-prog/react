import { useState } from "react"

const pads = [
  {
    id: 1,
    color: "#F18D8B",
    on: true,
  },
  {
    id: 2,
    color: "#F5C280",
    on: false,
  },
  {
    id: 3,
    color: "#EEEC79",
    on: true,
  },
  {
    id: 4,
    color: "#64ED98",
    on: true,
  },
  {
    id: 5,
    color: "#63DEED",
    on: false,
  },
  {
    id: 6,
    color: "#877FED",
    on: false,
  },
  {
    id: 7,
    color: "#A57FE9",
    on: false,
  },
  {
    id: 8,
    color: "#F289C1",
    on: true,
  },
]

function Pad({ pad, toggle }) {
  return (
    <>
      <button
        className={pad.on ? "on" : undefined}
        style={{ backgroundColor: pad.color }}
        onClick={() => toggle(pad.id)}
      ></button>
    </>
  )
}

export default function ColorPalette() {
  const [btn, setBtn] = useState(pads)

  function toggle(id) {
    setBtn((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item
      }),
    )
  }

  const btnElements = btn.map((pad) => (
    <Pad key={pad.id} pad={pad} toggle={toggle} />
  ))

  return (
    <>
      <div className="pad-container">{btnElements}</div>
    </>
  )
}
