import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CreateArticle from "./pages/CreateArticle";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const token = localStorage.getItem("access_token");


  function ProtectedRoute({ children }) {
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return children;
  }

  return (
    <div>
      <Routes>
       

        <Route
          path="/createarticle"
          element={
            <ProtectedRoute>
              <CreateArticle />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
