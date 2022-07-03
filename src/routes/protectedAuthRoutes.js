import React from "react";
import { Navigate, Route } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");
  if (user) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
