"use client";

import { useGameEngine } from "@/hooks/useGameEngine";
import { Keyboard, Play, Rocket, RotateCcw, Trophy } from "lucide-react";

export default function GameOver() {
  const { gameState, startGame } = useGameEngine();
  const { score, status } = gameState;
  return (
    <>
      {status !== "playing" && (
        <div className="absolute inset-0 bg-slate-950/80 flex items-center justify-center z-30 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 text-center shadow-2xl shadow-black/80 overflow-hidden">
            {/* Subtle background ambient lights */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Title Icon Badge */}
            <div className="mx-auto w-16 h-16 rounded-2xl bg-linear-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.4)] mb-5">
              <Rocket className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-wider bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent mb-2">
              WordBlaster
            </h2>
            <p className="text-sm text-slate-400 mb-6">
              Gõ từ chính xác để tiêu diệt mục tiêu trước khi chạm phòng tuyến
            </p>

            {status === "game-over" && (
              <div className="mb-6 p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 text-center">
                <div className="text-xs uppercase font-bold tracking-widest text-rose-400 mb-1">
                  Trận đấu kết thúc
                </div>
                <div className="flex items-center justify-center gap-2.5 text-3xl font-extrabold font-mono text-white mb-1">
                  <Trophy className="w-7 h-7 text-amber-400" />
                  <span>{score.toLocaleString()}</span>
                </div>
                <div className="text-xs text-slate-400">
                  Điểm số chung cuộc của bạn
                </div>
              </div>
            )}

            <button
              onClick={startGame}
              className="w-full py-4 px-6 rounded-2xl bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-white font-bold text-lg tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer"
            >
              {status === "idle" ? (
                <>
                  <Play className="w-5 h-5 fill-white" />
                  <span>BẮT ĐẦU CHƠI</span>
                </>
              ) : (
                <>
                  <RotateCcw className="w-5 h-5" />
                  <span>CHƠI LẠI</span>
                </>
              )}
            </button>

            {/* Keyboard Tip Pill */}
            <div className="mt-6 flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-left">
              <Keyboard className="w-4 h-4 text-cyan-400 shrink-0" />
              <p className="text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-300">Mẹo:</strong> Tắt bộ gõ Tiếng
                Việt (Unikey/EVKey) để gõ chuẩn xác hơn.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
