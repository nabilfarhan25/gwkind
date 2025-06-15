"use client";
import Timeline from "./timeline";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-[family-name:var(--font-nunito)]">
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-500/30 via-pink-500/20 to-rose-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-bl from-pink-600/25 via-red-400/15 to-rose-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 -left-20 w-64 h-64 bg-gradient-to-r from-rose-500/20 via-pink-400/25 to-red-300/15 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 -right-32 w-72 h-72 bg-gradient-to-l from-red-400/30 via-rose-500/20 to-pink-600/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-tr from-pink-500/20 via-red-500/15 to-rose-400/25 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute -bottom-32 -right-16 w-88 h-88 bg-gradient-to-tl from-rose-600/25 via-pink-400/20 to-red-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "5s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <Navbar />

        {/* Main Content */}
        <main className="relative z-20">
          <Jumbotron />
          <Timeline />
        </main>
      </div>
    </div>
  );
}
