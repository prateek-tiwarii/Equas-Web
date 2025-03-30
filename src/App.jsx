import { BrowserRouter as Router } from "react-router-dom";
import NavBarRoutes from "./Routes/NavBarRoutes";

function App() {
  return (
    <Router>
      <NavBarRoutes />
    </Router>
  );
}

export default App;
