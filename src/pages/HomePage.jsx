import { Link } from "react-router-dom"

import { routes } from "../routes"

export default function HomePage() {
  // filter all routes excluding homepage
  const learningPages = routes.filter((route) => route.path !== "/")

  return (
    <main className="page">
      <h1>React Learning Project</h1>
      <p>
        This app collects small exercises and concepts as you learn React. Use
        the header or the links below to jump to each topic.
      </p>
      <ul className="page-links">
        {learningPages.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.label}</Link>
            {route.description && <span> — {route.description}</span>}
          </li>
        ))}
      </ul>
    </main>
  )
}
