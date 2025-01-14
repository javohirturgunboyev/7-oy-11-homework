import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import CreatArticle from "./pages/CreateArticle";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const navigate = useNavigate("");
  const token = localStorage.getItem("access_token");

  function ProtectedRoute({children}) {
    if (!token) {
      return navigate("/login");
    }
    return children
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        
        <Route
          path="/creatarticle"
          element={<CreatArticle></CreatArticle>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
