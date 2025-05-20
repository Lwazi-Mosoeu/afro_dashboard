import { useAuth } from "@/context/AuthContext";

export default function PersistLogin({ children }) {
  const { loading } = useAuth();

  if (loading) return null;
  return children;
}
