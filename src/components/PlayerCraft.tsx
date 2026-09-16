"use client";

import { useGameEngine } from "@/hooks/useGameEngine";
import { Terminal } from "lucide-react";

export default function PlayerCraft() {
  const { gameState } = useGameEngine();
  const { currentInput } = gameState;
  const isShooting = currentInput.length > 0;
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none">
      {/* Input Display Cockpit */}
      <div className="flex items-center gap-2.5 px-5 py-2 rounded-xl backdrop-blur-md bg-slate-950/80 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.25)] min-w-55 justify-center mb-3">
        <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
        <div className="font-mono text-2xl font-bold tracking-widest text-cyan-300 min-h-8 flex items-center">
          {currentInput ? (
            <>
              <span>{currentInput}</span>
              <span className="inline-block w-2 h-5 ml-1 bg-cyan-400 animate-pulse rounded-xs" />
            </>
          ) : (
            <span className="text-slate-500 text-sm font-sans tracking-normal select-none">
              Nhập từ để bắn...
            </span>
          )}
        </div>
      </div>

      {/* Futuristic Vector Spaceship */}
      <div
        className={`relative flex flex-col items-center ${isShooting ? "scale-90 translate-y-1" : "animate-bounce"}`}
      >
        {/* Twin Laser Guides */}
        <div className="absolute -top-5 flex justify-between w-9 opacity-75">
          <div className="w-0.5 h-5 bg-linear-to-t from-cyan-400 to-transparent animate-pulse" />
          <div className="w-0.5 h-5 bg-linear-to-t from-cyan-400 to-transparent animate-pulse" />
        </div>

        {/* Interceptor Craft SVG */}
        <svg
          className="w-14 h-14 drop-shadow-[0_0_15px_rgba(6,182,212,0.7)] text-cyan-400"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 4L32 26L38 34L28 32L24 38L20 32L10 34L16 26L24 4Z"
            fill="url(#shipGrad)"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M24 12L27 24L24 28L21 24L24 12Z"
            fill="#38bdf8"
            opacity="0.9"
          />
          <line
            x1="11"
            y1="20"
            x2="11"
            y2="28"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="37"
            y1="20"
            x2="37"
            y2="28"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="shipGrad"
              x1="24"
              y1="4"
              x2="24"
              y2="38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0284c7" />
              <stop offset="1" stopColor="#0f172a" />
            </linearGradient>
          </defs>
        </svg>

        {/* Plasma Thruster Glow */}
        <div
          className={`w-2.5 h-4 bg-linear-to-b from-cyan-300 via-blue-500 to-transparent rounded-full blur-[1px] -mt-1 animate-pulse ${isShooting ? "opacity-100" : "opacity-50"}`}
        />
      </div>
    </div>
  );
}
