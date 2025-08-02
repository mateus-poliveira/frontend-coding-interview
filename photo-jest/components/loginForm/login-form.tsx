"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
      className="flex gap-[24px] flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <fieldset>
        <label className="text-[14px] font-bold">
          Username:
          <input
            className="rounded-[4px] h-[44px] w-full border-[#9CA3AF] mt-[10px] border-x border-y"
            data-testid="username"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="username"
          />
        </label>
      </fieldset>
      <fieldset>
        <label className="flex flex-row flex-wrap text-[14px]">
          <span className="flex w-[50%] font-bold">Password:</span>
          <Link className="w-[50%] flex justify-end" href="#">
            <span className="text-[#0075EB] ">Forgot Password?</span>
          </Link>
          <input
            className="rounded-[4px] h-[44px] w-full mt-[10px] border-[#9CA3AF] border-x border-y"
            data-testid="password"
            type="password"
            name="password"
          />
        </label>
      </fieldset>
      <button
        className="bg-[#0075EB] h-[44px] rounded-[4px] block text-white w-full"
        data-testid="submit"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
};
