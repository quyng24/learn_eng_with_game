"use client";

import FallingWords from "@/components/FallingWords";
import PlayerCraft from "@/components/PlayerCraft";
import Header from "@/components/shared/header";
import { useGameEngine } from "@/hooks/useGameEngine";
import GameOver from "@/pages/GameOver";
import { audioSystem } from "@/utils/audio";
import { ShieldAlert, AlertTriangle } from "lucide-react";
import { useEffect } from "react";

export default function WordBlaster() {
  const { gameState } = useGameEngine();
  const { isShaking, lastMissedWord, explosions, activeWords, currentInput } =
    gameState;

  useEffect(() => {
    audioSystem.init();
  }, []);

  useEffect(() => {
    if (explosions.length > 0) audioSystem.play("explosion");
  }, [explosions]);

  useEffect(() => {
    if (isShaking) audioSystem.play("error");
  }, [isShaking]);

  const targetedWord = activeWords.find(
    (w) => w.text.startsWith(currentInput) && currentInput.length > 0,
  );

  return (
    <>
      <main className="flex items-center justify-center w-screen h-screen bg-slate-950 text-white overflow-hidden select-none">
        {/* Game Container */}
        <div
          className={`relative w-full h-full bg-slate-950 overflow-hidden transition-all duration-75 ${
            isShaking
              ? "shadow-[inset_0_0_100px_rgba(244,63,94,0.8)] translate-x-2 -translate-y-1 border-8 border-rose-500"
              : "border-0"
          }`}
        >
          {/* Subtle grid background effect */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[32px_32px] opacity-40 pointer-events-none" />
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {targetedWord && (
              <line
                x1="50%"
                y1="85%"
                x2={`${targetedWord.x}%`}
                y2={`${targetedWord.y}%`}
                stroke="#22d3ee"
                strokeWidth="4"
                strokeDasharray="12 6"
                className="animate-[dash_0.3s_linear_infinite] drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
              />
            )}
          </svg>

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
                <span className="text-rose-300">
                  ({lastMissedWord.meaning})
                </span>
              </div>
            </div>
          )}

          {explosions.map((exp) => (
            <div
              key={exp.id}
              className="absolute pointer-events-none z-30 flex items-center justify-center"
              style={{
                left: `${exp.x}%`,
                top: `${exp.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="absolute w-24 h-24 border-4 border-cyan-400 rounded-full opacity-0 animate-[ping_0.5s_ease-out_forwards]" />

              <div className="flex flex-col items-center animate-[bounce_0.6s_ease-out_forwards]">
                <div className="text-2xl font-black text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,1)]">
                  +{exp.earnedScore}
                </div>
                <div className="text-sm font-bold text-white/80 mt-1 uppercase tracking-widest">
                  {exp.text}
                </div>
              </div>
            </div>
          ))}

          {/* Boundary / Defense Line */}
          <div className="absolute bottom-32 w-full flex items-center justify-center pointer-events-none z-10">
            <div className="w-full h-0.5 bg-linear-to-r from-transparent via-rose-500/80 to-transparent shadow-[0_0_15px_rgba(244,63,94,0.8)] border-t border-dashed border-rose-400/50" />
            <div className="absolute px-4 py-1 rounded-full bg-rose-950/90 border border-rose-500/50 text-rose-400 text-[10px] font-black tracking-widest flex items-center gap-2 uppercase select-none shadow-[0_0_20px_rgba(244,63,94,0.3)]">
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              <span>Phòng Tuyến Cuối</span>
            </div>
          </div>

          {/* Player Craft & Input Cockpit */}
          <PlayerCraft />
        </div>
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes dash {
          to { stroke-dashoffset: -18; }
        }
      `,
        }}
      />
    </>
  );
}
