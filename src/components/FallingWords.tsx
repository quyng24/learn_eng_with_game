"use client";

import { useGameEngine } from "@/hooks/useGameEngine";

export default function FallingWords() {
  const { gameState } = useGameEngine();
  const { activeWords, currentInput } = gameState;
  return (
    <>
      {activeWords.map((word) => {
        const isTargeted =
          word.text.toLowerCase().startsWith(currentInput.toLowerCase()) &&
          currentInput.length > 0;

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
              className={`whitespace-pre text-xl sm:text-2xl font-mono px-3.5 py-1.5 rounded-xl border backdrop-blur-md transition-all duration-75
                ${
                  isTargeted
                    ? "bg-cyan-950/90 border-cyan-400 scale-110 shadow-[0_0_30px_rgba(6,182,212,0.7)]"
                    : "bg-slate-900/90 border-slate-700/80 shadow-lg"
                }
              `}
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
