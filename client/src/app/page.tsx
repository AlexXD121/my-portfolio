'use client';

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-black pb-8 relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <Hero />
      </div>
    </main>
  );
}