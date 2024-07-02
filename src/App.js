import "./App.css";
import { AppRouter } from "./libs";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
