import { useAuth } from "@/context/AuthContext";
import { ReactNode } from "react";

interface PersistLoginProps {
  children: ReactNode;
}

export default function PersistLogin({ children }: PersistLoginProps) {
  const { loading } = useAuth();

  if (loading) return null;
  return <>{children}</>;
}
