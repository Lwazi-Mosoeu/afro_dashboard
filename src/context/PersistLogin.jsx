import { useAuth } from "@/context/AuthContext";

// wait until authentication is fully "checked"

export default function PersistLogin({ children }) {
  const { loading } = useAuth();

  if (loading) return null;
  return children;
}
