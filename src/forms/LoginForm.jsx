"use client";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    const success = await login(username, password);
    if (success) {
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Username</label>
          <Input
            name="username"
            type="text"
            placeholder="admin"
            className="w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <Input
            name="password"
            type="password"
            placeholder="password123"
            className="w-full"
            required
          />
        </div>
        <Button type="submit" className="w-full mt-4">
          Login
        </Button>
      </form>
      <p className="mt-4 text-center text-sm">
        Don't have an account?{" "}
        <button
          onClick={() => navigate("/signup")}
          className="text-primary underline"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}
