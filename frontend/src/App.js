import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Topic from "./pages/Topic";
import AskQuestion from "./pages/AskQuestion";
import Tags from "./pages/Tags";
import Users from "./pages/Users";
import Question from "./pages/Question";

function App() {
  let routes;
  const [isAuth, setIsAuth] = useState(false);
  if (isAuth) {
    routes = (
      <Routes>
        <Route exact path="*" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    );
  } else {
    routes = (
      <div className=" bg-white">
        <Navbar />
        <div className="xl:w-9/12 mx-auto  grid grid-cols-9 gap-1">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/ask" element={<AskQuestion />} />
            <Route exact path="/question" element={<Question />} />
            <Route exact path="/topic" element={<Topic />} />
            <Route exact path="/tags" element={<Tags />} />
            <Route exact path="/users" element={<Users />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
  return <Router>{routes}</Router>;
}

export default App;
