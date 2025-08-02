"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (email === "testing@testing") {
      document.cookie = `auth=testing; path=/;`;
      router.push("/photos");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <label>
        Username:
        <input
          data-testid="username"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="username"
        />
      </label>
      <label>
        Password:
        <input data-testid="password" type="password" name="password" />
      </label>
      <button data-testid="submit" type="submit">
        Sign In
      </button>
    </form>
  );
};
