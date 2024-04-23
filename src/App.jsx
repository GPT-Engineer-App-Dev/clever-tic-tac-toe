import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TicTacToe from "./pages/TicTacToe.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}

export default App;