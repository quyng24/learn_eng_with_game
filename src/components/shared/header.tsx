"use client";

import { useGameEngine } from "@/hooks/useGameEngine";
import { Flame, Heart, Rocket, Trophy } from "lucide-react";

export default function Header() {
  const { gameState } = useGameEngine();
  const { score, combo, lives, level } = gameState;
  return (
    <header className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between backdrop-blur-md bg-slate-950/60 border-b border-slate-800/80 z-10 shadow-lg">
      {/* Logo / Brand */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
          <Rocket className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="font-bold text-lg tracking-wider text-white flex items-center gap-2">
            WordBlaster
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              Arcade
            </span>
          </h1>
          <p className="text-xs text-slate-400 hidden sm:block">
            Luyện gõ từ vựng tiếng Anh
          </p>
        </div>
      </div>

      {/* Center Stats: Score & Combo */}
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2.5 bg-slate-900/80 px-4 py-1.5 rounded-xl border border-slate-800 shadow-inner">
          <Trophy className="w-5 h-5 text-amber-400" />
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
              Điểm số
            </div>
            <div className="text-xl font-bold font-mono text-amber-300 leading-tight">
              {score.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="text-xl text-yellow-400 font-bold">
            Level: {level}
          </div>
          {combo > 2 && (
            <div className="text-xl text-orange-500 font-bold animate-pulse">
              {combo} Combo!
            </div>
          )}
        </div>

        {combo > 1 && (
          <div className="flex items-center gap-2 bg-linear-to-r from-orange-500/20 to-amber-500/20 px-3.5 py-1.5 rounded-xl border border-orange-500/40 animate-pulse shadow-[0_0_15px_rgba(249,115,22,0.25)]">
            <Flame className="w-5 h-5 text-orange-400 fill-orange-400" />
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-wider text-orange-400 font-bold">
                Chuỗi
              </div>
              <div className="text-xl font-black font-mono text-orange-300 leading-tight">
                x{combo}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right: Lives */}
      <div className="flex items-center gap-2.5 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800 shadow-inner">
        <span className="text-xs text-slate-400 font-medium hidden sm:inline mr-1">
          Mạng:
        </span>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <Heart
              key={i}
              className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
                i < lives
                  ? "text-rose-500 fill-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)] scale-100"
                  : "text-slate-700 fill-slate-800/40 scale-90"
              }`}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
