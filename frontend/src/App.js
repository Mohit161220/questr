import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";
import Footer from "./components/Footer";

function App() {
  let routes;
  const [isLogin, setIsLogin] = useState(true);
  if (!isLogin) {
    routes = (
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    );
  } else {
    routes = (
      <div className="bg-gray-100">
        <Navbar />
        <div className="xl:w-9/12 mx-auto  grid grid-cols-9 gap-1">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    );
  }
  return <Router>{routes}</Router>;
}

export default App;
