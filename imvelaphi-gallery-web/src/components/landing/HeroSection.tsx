"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { LandingHeader } from "./LandingHeader";

const heroImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.jpg",
];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((current) => (current + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[740px] overflow-hidden rounded-b-[45%_6%] bg-forest">

      {/* Hero slideshow */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />
      ))}

      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-forest/70" />

      {/* Header */}
      <LandingHeader />

      {/* Hero content */}
      <div className="relative z-[1] flex min-h-[740px] flex-col justify-end px-5 pb-12">
        <div className="max-w-[380px]">

          {/* Category badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sun/40 bg-forest/60 px-3 py-1.5 backdrop-blur-sm">
            <Sparkles size={13} className="text-sun" />

            <span className="font-body text-[10px] font-semibold tracking-[0.12em] text-sun">
              HERITAGE · CULTURE · UBUNTU
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-[40px] font-black leading-[1.02] tracking-[-0.03em] text-white">
            Where South
            <br />
            Africa Lives On
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[340px] font-body text-[15px] font-medium leading-6 text-white/80">
            Discover, share and preserve the traditions, languages, and stories
            of our beautiful nation.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex items-center gap-2.5">
            <Link
              href="/login"
              className="flex flex-1 items-center justify-center rounded-xl bg-sun px-5 py-3.5 font-body text-sm font-bold text-ink transition hover:brightness-105"
            >
              Join the Community
            </Link>

            <Link
              href="#discover"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 font-body text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Explore
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}