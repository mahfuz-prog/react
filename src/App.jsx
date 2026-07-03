import { Route, Routes } from "react-router-dom"

import { Layout } from "./components/Layout"
import { routes } from "./routes"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ path, element: Page }) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
      </Route>
    </Routes>
  )
}
