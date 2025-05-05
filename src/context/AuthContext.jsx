"use client";
import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = Cookies.get("authUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const detectDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|ipod/.test(userAgent)) return "mobile";
    if (/tablet|ipad|playbook|silk/.test(userAgent)) return "tablet";
    return "desktop";
  };

  const login = async (username, password) => {
    try {
      const device = detectDevice();
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, device }),
      });

      const data = await res.json();

      if (res.ok) {
        const userData = {
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

  const signUp = async (newUser) => {
    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();

      if (res.ok) {
        const userData = {
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

  const logout = async () => {
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

export const useAuth = () => useContext(AuthContext);
