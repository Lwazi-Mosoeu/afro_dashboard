"use client";
import { useAuth } from "@/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Pass current location to redirect back after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
