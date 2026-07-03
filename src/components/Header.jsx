import { NavLink } from "react-router-dom"

import { routes } from "../routes"

export default function Header() {
  return (
    <header>
      <img src="/src/assets/react.svg" alt="" />
      <nav>
        <ul className="nav-list">
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) => (isActive ? "active" : undefined)}
                end={route.path === "/"}
              >
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
