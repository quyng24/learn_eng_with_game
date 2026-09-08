"use client";

import FallingWords from "@/components/FallingWords";
import PlayerCraft from "@/components/PlayerCraft";
import Header from "@/components/shared/header";
import { useGameEngine } from "@/hooks/useGameEngine";
import GameOver from "@/pages/GameOver";
import { ShieldAlert, AlertTriangle } from "lucide-react";

export default function WordBlaster() {
  const { gameState } = useGameEngine();
  const { isShaking, lastMissedWord, explosions } = gameState;

  return (
    <main className="flex items-center justify-center w-screen h-screen bg-slate-950 text-white overflow-hidden select-none">
      {/* Game Container */}
      <div
        className={`relative w-full h-full bg-slate-950 overflow-hidden transition-all duration-75 ${
          isShaking
            ? "shadow-[inset_0_0_60px_rgba(244,63,94,0.6)] translate-x-1.5"
            : ""
        }`}
      >
        {/* Subtle grid background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[32px_32px] opacity-40 pointer-events-none" />

        {/* Top HUD Stats Bar */}
        <Header />

        {/* Start / Game Over Screen Overlay */}
        <GameOver />

        {/* Falling Words */}
        <FallingWords />

        {/* Missing Word Notification Banner */}
        {lastMissedWord && isShaking && (
          <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-rose-950/80 border border-rose-500/50 backdrop-blur-md shadow-[0_0_30px_rgba(244,63,94,0.3)] text-rose-200">
            <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
            <div className="text-sm font-medium">
              <span className="text-rose-400 font-bold uppercase tracking-wider text-xs mr-2">
                Bị lỡ:
              </span>
              <span className="font-mono font-bold text-white mr-1.5">
                {lastMissedWord.text}
              </span>
              <span className="text-rose-300">({lastMissedWord.meaning})</span>
            </div>
          </div>
        )}

        {/* HIỆU ỨNG NỔ (EXPLOSIONS) */}
        {explosions.map((exp) => (
          <div
            key={exp.id}
            className="absolute flex flex-col items-center pointer-events-none animate-bounce"
            style={{
              left: `${exp.x}%`,
              top: `${exp.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="text-4xl text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]">
              💥
            </div>
            <div className="text-xl font-black text-green-400 drop-shadow-md">
              +{exp.earnedScore}
            </div>
            <div className="text-sm font-bold text-yellow-300 opacity-80">
              {exp.text}
            </div>
          </div>
        ))}

        {/* Boundary / Defense Line */}
        <div className="absolute bottom-32 w-full flex items-center justify-center pointer-events-none">
          <div className="w-full h-px bg-linear-to-r from-transparent via-rose-500/60 to-transparent shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
          <div className="absolute px-3 py-0.5 rounded-full bg-slate-950/90 border border-rose-500/30 text-rose-400 text-[10px] font-mono tracking-widest flex items-center gap-1.5 uppercase select-none shadow-sm">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
            <span>Ranh giới phòng thủ</span>
          </div>
        </div>

        {/* Player Craft & Input Cockpit */}
        <PlayerCraft />
      </div>
    </main>
  );
}
