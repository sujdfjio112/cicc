import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./router/index"

const App = () => {
  return (
    <Router basename="/cicc">
      <Routes />
    </Router>
  )
}

// const App = () => {
//   return <div>231231</div>
// }

export default App
