"use client";

import { useGameEngine } from "@/hooks/useGameEngine";

export default function FallingWords() {
  const { gameState } = useGameEngine();
  const { activeWords, currentInput } = gameState;
  return (
    <>
      {activeWords.map((word) => {
        const isTargeted =
          word.text.startsWith(currentInput) && currentInput.length > 0;

        return (
          <div
            key={word.id}
            className="absolute flex flex-col items-center pointer-events-none select-none"
            style={{
              left: `${word.x}%`,
              top: `${word.y}%`,
              transform: "translate3d(-50%, 0, 0)",
              willChange: "top",
            }}
          >
            <div
              className={`px-4 py-1.5 rounded-xl backdrop-blur-md transition-all duration-150 shadow-lg ${
                isTargeted
                  ? "bg-slate-900/95 border-2 border-cyan-400 ring-4 ring-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105"
                  : "bg-slate-900/85 border border-slate-700/80 text-slate-200 shadow-black/40"
              }`}
            >
              <div className="font-mono text-xl tracking-wider flex items-center">
                {isTargeted ? (
                  <>
                    <span className="text-cyan-400 font-extrabold drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
                      {currentInput}
                    </span>
                    <span className="text-slate-200 font-medium">
                      {word.text.slice(currentInput.length)}
                    </span>
                  </>
                ) : (
                  <span className="font-medium">{word.text}</span>
                )}
              </div>
              {/* Meaning badge below the word */}
              <div className="text-[11px] text-slate-400 font-sans tracking-normal text-center mt-0.5">
                {word.meaning}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
