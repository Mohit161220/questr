import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
