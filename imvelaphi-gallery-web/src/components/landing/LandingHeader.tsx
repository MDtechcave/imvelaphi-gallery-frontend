import Link from "next/link";
import { Globe2 } from "lucide-react";

export function LandingHeader() {
  return (
    <header className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-5 pt-6">
      <Link href="/" className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sun text-white">
          <Globe2 size={19} strokeWidth={2} />
        </span>

        <span className="font-heading text-lg font-extrabold text-white">
          Imvelaphi
        </span>
      </Link>

      <Link
        href="/login"
        className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
      >
        Sign in
      </Link>
    </header>
  );
}