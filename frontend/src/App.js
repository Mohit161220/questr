import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Topic from "./pages/Topic";
import Question_page from './pages/Question_page';
import Tags from './pages/Tags';
import Users from './pages/Users';

function App() {
  let routes;
  const [isLogin, setIsLogin] = useState(true);
  if (!isLogin) {
    routes = (
      <Routes>
        <Route exact path="*" element={<Login />} />
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
            <Route exact path="/ask" element={<Question_page />} />
            <Route exact path="/ask" element={<Question_page />} />
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
