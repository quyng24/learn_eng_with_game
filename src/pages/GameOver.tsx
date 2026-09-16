"use client";

import { useGameEngine } from "@/hooks/useGameEngine";
import { TOPICS } from "@/data/vocabulary";
import {
  Keyboard,
  Play,
  Rocket,
  RotateCcw,
  Trophy,
  LayoutGrid,
} from "lucide-react";

export default function GameOver() {
  const { gameState, startGame, goToMenu } = useGameEngine();
  const { score, status, selectedTopicId } = gameState;

  return (
    <>
      {status !== "playing" && (
        <div className="absolute inset-0 bg-slate-950/80 flex items-center justify-center z-30 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 text-center shadow-2xl shadow-black/80 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="mx-auto w-16 h-16 rounded-2xl bg-linear-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.4)] mb-5 shrink-0">
              <Rocket className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-wider bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent mb-2 shrink-0">
              WordBlaster
            </h2>
            <p className="text-sm text-slate-400 mb-6 shrink-0">
              {status === "idle"
                ? "Chọn một chủ đề từ vựng để bắt đầu nhiệm vụ"
                : "Gõ từ chính xác để tiêu diệt mục tiêu trước khi chạm phòng tuyến"}
            </p>

            {status === "idle" && (
              <div className="flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar">
                {TOPICS.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => startGame(topic.id)}
                    className="group relative flex flex-col text-left p-4 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(6,182,212,0.15)] overflow-hidden cursor-pointer shrink-0"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-transparent transition-colors duration-500"></div>
                    <div className="flex justify-between items-center relative z-10 mb-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {topic.name}
                      </h3>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-cyan-400 text-xs font-bold uppercase tracking-wider">
                        Chơi <Play className="w-3 h-3 fill-cyan-400" />
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 relative z-10">
                      {topic.description}
                    </p>
                    <div className="mt-3 text-xs font-mono font-bold text-slate-500 relative z-10">
                      {topic.words.length} từ vựng
                    </div>
                  </button>
                ))}
              </div>
            )}

            {status === "game-over" && (
              <div className="shrink-0">
                <div className="mb-6 p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 text-center">
                  <div className="text-xs uppercase font-bold tracking-widest text-rose-400 mb-1">
                    Trận đấu kết thúc
                  </div>
                  <div className="flex items-center justify-center gap-2.5 text-3xl font-extrabold font-mono text-white mb-1">
                    <Trophy className="w-7 h-7 text-amber-400" />
                    <span>{score.toLocaleString()}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    Chủ đề vừa chơi:{" "}
                    <span className="text-cyan-400 font-bold">
                      {TOPICS.find((t) => t.id === selectedTopicId)?.name}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => startGame(selectedTopicId || TOPICS[0].id)}
                    className="w-full py-4 px-6 rounded-2xl bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-white font-bold text-lg tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <RotateCcw className="w-5 h-5" />
                    <span>CHƠI LẠI</span>
                  </button>

                  <button
                    onClick={goToMenu}
                    className="w-full py-4 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white font-bold text-lg tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <LayoutGrid className="w-5 h-5" />
                    <span>ĐỔI CHỦ ĐỀ</span>
                  </button>
                </div>
              </div>
            )}

            <div className="mt-6 shrink-0 flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-left">
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
