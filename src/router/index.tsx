import { Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import About from "../pages/About"
import Communication from "../pages/communication"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/communication" Component={Communication} />
    </Routes>
  )
}

export default AppRoutes
