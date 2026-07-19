export default function ProgrammingWorld(props) {
  const languages = [
    { language: "HTML", color: "red" },
    { language: "CSS", color: "lightseagreen" },
    { language: "Javascript", color: "yellow" },
    { language: "React", color: "green" },
    { language: "TypeScript", color: "lightseagreen" },
    { language: "Node.js", color: "orange" },
    { language: "Python", color: "yellow" },
    { language: "Ruby", color: "red" },
    { language: "Assembly", color: "lightseagreen" },
  ]

  return (
    <div className="languages">
      <ul>
        {languages.map((item, idx) => (
          <li
            key={idx}
            style={{ backgroundColor: item.color }}
            className={idx < props.attempts ? "die" : ""}
          >
            {item.language}
          </li>
        ))}
      </ul>
    </div>
  )
}
