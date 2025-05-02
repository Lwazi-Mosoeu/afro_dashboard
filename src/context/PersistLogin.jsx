"use client";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom"; // Changed from next/navigation

export default function PersistLogin({ children }) {
  const { user, accessToken, refreshToken } = useAuth();
  const navigate = useNavigate(); // React Router's navigation hook
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      const persistAuth = localStorage.getItem("persistAuth") === "true";

      if (!accessToken && persistAuth) {
        const success = await refreshToken();
        if (!success) {
          navigate("/login", { replace: true });
        }
      }

      setIsLoading(false);
    };

    verifyAuth();
  }, [accessToken, refreshToken, navigate]);

  if (isLoading) return <div>Loading...</div>;
  return children;
}
