import { Globe, ArrowLeft } from "lucide-react";

interface AuthHeroProps {
  subtitle: string;
}

export function AuthHero({ subtitle }: AuthHeroProps) {
  return (
    <div className="relative h-56 bg-[#2F4A3D] overflow-hidden">
      {/* Swap this for the actual landscape photo from Figma, e.g. /public/auth-hero.jpg */}
      <div className="absolute inset-0 bg-[url('/auth-hero.jpg')] bg-cover bg-center opacity-40" />

      <button
        aria-label="Go back"
        className="absolute top-5 left-5 w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center text-white"
      >
        <ArrowLeft size={18} />
      </button>

      <div className="relative flex flex-col items-center pt-10 text-white">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D99A3D] to-[#C77F2E] flex items-center justify-center mb-3 shadow-md">
          <Globe size={26} className="text-white" />
        </div>
        <h1 className="font-display text-2xl font-bold tracking-tight">Imvelaphi</h1>
        <p className="text-sm text-white/85 mt-1">{subtitle}</p>
      </div>

      {/* Wave divider */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 400 40"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 C100,45 300,-5 400,20 L400,40 L0,40 Z"
          fill="#F4EEE1"
        />
      </svg>
    </div>
  );
}