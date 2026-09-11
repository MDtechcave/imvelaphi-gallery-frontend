"use client";

import { useState } from "react";
import { Mail, Lock, User, Users } from "lucide-react";
import { AuthHero } from "../../../components/auth/AuthHero";
import { AuthTabs } from "../../../components/auth/AuthTabs";
import { FormField } from "../../../components/auth/FormField";
import { SocialButtons } from "../../../components/auth/SocialButtons";

export default function LoginPage() {
const [mode, setMode] = useState<"signin" | "signup">("signin");

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [fullName, setFullName] = useState("");
const [tribe, setTribe] = useState("");


const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:8000/api/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Login failed:", data.message);
      return;
    }

    console.log("LOGIN SUCCESS:", data);

    localStorage.setItem("token", data.user.token);

    localStorage.setItem(
      "user",
      JSON.stringify({
        id: data.user.id,
        username: data.user.username,
        email: data.user.email,
        role: data.user.role,
      })
    );

    // const currentUser = await getCurrentUser();

    // console.log("CURRENT USER:", currentUser);

    window.location.href = "/";
  } catch (error) {
    console.error("Login failed:", error);
  }
};

return (
    <div className="min-h-screen bg-[#F4EEE1] flex flex-col">
      <AuthHero
        subtitle={mode === "signin" ? "Welcome back" : "Join our community"}
      />

      <div className="flex-1 px-6 pt-6 pb-8 flex flex-col gap-4">
        <AuthTabs mode={mode} onChange={setMode} />

{mode === "signin" ? (
  <form className="flex flex-col gap-4" onSubmit={handleLogin}>
    <FormField
      icon={Mail}
      type="email"
      placeholder="Email address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />

    <FormField
      icon={Lock}
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />

    <button
      type="submit"
      className="bg-[#2F4A3D] text-white rounded-full py-3.5 font-semibold text-sm mt-1"
    >
      Sign In
    </button>

    <button
      type="button"
      className="text-sm text-[#2F4A3D] font-medium text-center"
    >
      Forgot password?
    </button>
  </form>
) : (
  <form className="flex flex-col gap-4">
    <FormField
      icon={User}
      type="text"
      placeholder="Full name"
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
      required
    />

    <FormField
      icon={Mail}
      type="email"
      placeholder="Email address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />

    <FormField
      icon={Users}
      type="text"
      placeholder="Select your tribe / culture"
      value={tribe}
      onChange={(e) => setTribe(e.target.value)}
      required
    />

    <FormField
      icon={Lock}
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />

    <button
      type="submit"
      className="bg-[#2F4A3D] text-white rounded-full py-3.5 font-semibold text-sm mt-1"
    >
      Join Imvelaphi
    </button>
  </form>
)}        <SocialButtons />

        <button className="bg-[#E7D9B9] text-[#2F4A3D] rounded-full py-3 font-medium text-sm">
          Explore as guest
        </button>

        <p className="text-xs text-gray-500 text-center px-4">
          By joining, you agree to share with respect and preserve with pride.
        </p>
      </div>
    </div>
  );
}

