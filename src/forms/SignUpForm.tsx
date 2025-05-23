"use client";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SignUpCredentials {
  username: string;
  password: string;
}

export default function SignUpForm() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const credentials: SignUpCredentials = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    const success = await signUp(credentials);

    if (success) {
      navigate("/login");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Username</label>
          <Input
            name="username"
            type="text"
            placeholder="choose a username"
            required
            minLength={3}
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <Input
            name="password"
            type="password"
            placeholder="********"
            required
            minLength={6}
          />
        </div>
        <Button type="submit" className="w-full mt-4">
          Create Account
        </Button>
      </form>
      <p className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <button
          onClick={() => navigate("/login")}
          className="text-primary underline"
        >
          Log in
        </button>
      </p>
    </div>
  );
}
