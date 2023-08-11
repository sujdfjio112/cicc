import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./router/index"

const App = () => {
  return (
<Router basename={import.meta.env.VITE_BASENAME}>
      <Routes />
    </Router>
  )
}


export default App
