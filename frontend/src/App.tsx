import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LayoutLogin from "./components/Layout/LayoutLogin";
import LayoutDashboard from "./components/Layout/LayoutDashboard";

import Login from "./pages/Login/Login";
import Principal from "./pages/Principal/Principal";
import PrivateRoute from "./routes/PrivateRoute";

export default function App() {
  const usuario = JSON.parse(localStorage.getItem("usuario") || "null");

  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<LayoutLogin />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Route>

        {/* Rutas privadas */}
        <Route
          element={
            <PrivateRoute>
              <LayoutDashboard usuario={usuario} />
            </PrivateRoute>
          }
        >
          <Route path="/principal" element={<Principal />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}