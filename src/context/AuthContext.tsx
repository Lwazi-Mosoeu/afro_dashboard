"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import Cookies from "js-cookie";

interface User {
  username: string;
  id: string | null;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  signUp: (newUser: { username: string; password: string }) => Promise<boolean>;
  loading?: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = Cookies.get("authUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const detectDevice = (): string => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|ipod/.test(userAgent)) return "mobile";
    if (/tablet|ipad|playbook|silk/.test(userAgent)) return "tablet";
    return "desktop";
  };

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    try {
      const device = detectDevice();
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, device }),
      });

      const data = await res.json();

      if (res.ok) {
        const userData: User = {
          username: data.username,
          id: data.user_id,
        };
        setUser(userData);
        Cookies.set("authUser", JSON.stringify(userData), {
          expires: 7,
          secure: true,
        });
        return true;
      } else {
        alert(data.error || "Login failed.");
        return false;
      }
    } catch (err) {
      alert("Server error.");
      console.error(err);
      return false;
    }
  };

  const signUp = async (newUser: {
    username: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();

      if (res.ok) {
        const userData: User = {
          username: newUser.username,
          id: data.id || null,
        };
        setUser(userData);
        Cookies.set("authUser", JSON.stringify(userData), {
          expires: 7,
          secure: true,
        });
        return true;
      } else {
        alert(data.error || "Signup failed.");
        return false;
      }
    } catch (err) {
      alert("Server error.");
      console.error(err);
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      if (user) {
        await fetch("http://localhost:5000/api/logout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: user.id,
            username: user.username,
            device: detectDevice(),
          }),
        });
      }
    } catch (err) {
      console.error("Failed to record logout:", err);
    } finally {
      setUser(null);
      Cookies.remove("authUser");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
