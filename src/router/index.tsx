import { Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import About from "../pages/about"
import Communication from "../pages/communication"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} index={true} />
      <Route path="/about" element={<About />} />
      <Route path="/communication" element={<Communication />} />
    </Routes>
  )
}

export default AppRoutes
