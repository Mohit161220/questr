import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  let routes;
  const [isLogin, setIsLogin] = useState(true);
  if (!isLogin) {
    routes = (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      </Router>
    );
  } else {
    let tweets = [];
    for (let i = 1; i <= 25; i++) {
      tweets.push({
        _id: i,
        profileImage:
          "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        uername: "MOhit",
        text: "ldksfjsla fsdalkfjlsa  sjkfadflkajs klasjf kjsaf kla; jfa ;",
        twitImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      });
    }
    routes = (
      <Router>
        <Sidebar />
        <div className="min-h-screen">
          <main className=" h-full">
            <div className="md:ml-52">
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home/>} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    );
  }
  return <>{routes}</>;
}

export default App;
