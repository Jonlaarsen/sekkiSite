"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setLoginError("");

    const formData = new FormData(event.target as HTMLFormElement);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        router.push("/admin");
      } else {
        setLoginError(data.error || "Invalid username or password");
      }
    } catch (error) {
      setLoginError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleLogin}
        className="h-[20rem] flex flex-col justify-evenly"
      >
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            className="text-black text-xl pl-3 h-[2rem]"
            placeholder="Username"
            required
            disabled={isLoading}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="text-black text-xl pl-3 h-[2rem]"
            placeholder="Password"
            required
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          className="mt-10 text-2xl border-2"
          style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
        {loginError && <p className="text-red-500 mt-4">{loginError}</p>}
      </form>
    </div>
  );
}
