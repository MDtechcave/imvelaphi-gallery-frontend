"use client";

import { useState } from "react";
import { Mail, Lock, User, Users } from "lucide-react";
import { AuthHero } from "../../../components/auth/AuthHero";
import { AuthTabs } from "../../../components/auth/AuthTabs";
import { FormField } from "../../../components/auth/FormField";
import { SocialButtons } from "../../../components/auth/SocialButtons";

export default function LoginPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  return (
    <div className="min-h-screen bg-[#F4EEE1] flex flex-col">
      <AuthHero subtitle={mode === "signin" ? "Welcome back" : "Join our community"} />

      <div className="flex-1 px-6 pt-6 pb-8 flex flex-col gap-4">
        <AuthTabs mode={mode} onChange={setMode} />

        {mode === "signin" ? (
          <form className="flex flex-col gap-4">
            <FormField icon={Mail} type="email" placeholder="Email address" required />
            <FormField icon={Lock} type="password" placeholder="Password" required />

            <button
              type="submit"
              className="bg-[#2F4A3D] text-white rounded-full py-3.5 font-semibold text-sm mt-1"
            >
              Sign In
            </button>

            <button type="button" className="text-sm text-[#2F4A3D] font-medium text-center">
              Forgot password?
            </button>
          </form>
        ) : (
          <form className="flex flex-col gap-4">
            <FormField icon={User} type="text" placeholder="Full name" required />
            <FormField icon={Mail} type="email" placeholder="Email address" required />
            {/* Placeholder input for now — swap for a real <select> fed by your Culture/Tribe API */}
            <FormField icon={Users} type="text" placeholder="Select your tribe / culture" required />
            <FormField icon={Lock} type="password" placeholder="Password" required />

            <button
              type="submit"
              className="bg-[#2F4A3D] text-white rounded-full py-3.5 font-semibold text-sm mt-1"
            >
              Join Imvelaphi
            </button>
          </form>
        )}

        <SocialButtons />

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