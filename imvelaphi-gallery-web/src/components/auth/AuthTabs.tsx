interface AuthTabsProps {
  mode: "signin" | "signup";
  onChange: (mode: "signin" | "signup") => void;
}

export function AuthTabs({ mode, onChange }: AuthTabsProps) {
  return (
    <div className="flex bg-[#E7D9B9] rounded-full p-1">
      <button
        onClick={() => onChange("signin")}
        className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition ${
          mode === "signin"
            ? "bg-white text-[#2F4A3D] shadow"
            : "text-[#8B7355]"
        }`}
      >
        Sign In
      </button>
      <button
        onClick={() => onChange("signup")}
        className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition ${
          mode === "signup"
            ? "bg-white text-[#2F4A3D] shadow"
            : "text-[#8B7355]"
        }`}
      >
        Create Account
      </button>
    </div>
  );
}