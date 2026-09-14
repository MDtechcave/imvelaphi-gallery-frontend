import { HeroSection } from "../components/landing/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas">
      <div className="mx-auto min-h-screen max-w-[480px] overflow-hidden bg-off-white">
        <HeroSection />
      </div>
    </main>
  );
}