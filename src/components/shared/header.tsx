import { Rocket, Trophy, Flame, Heart } from "lucide-react";
import { useGameEngine } from "@/hooks/useGameEngine"; // Điều chỉnh lại đường dẫn nếu cần

export default function Header() {
  const { gameState } = useGameEngine();
  const { score, combo, lives, level } = gameState;

  return (
    <header className="absolute top-0 inset-x-0 px-6 py-4 flex items-center justify-between bg-linear-to-b from-slate-950/90 to-transparent z-10 pointer-events-none">
      {/* Container dùng Grid 3 cột để đảm bảo phần Giữa luôn căn giữa màn hình */}
      <div className="grid grid-cols-3 w-full items-center">
        {/* L E F T : Branding & Level */}
        <div className="flex items-center gap-3 justify-start">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Rocket className="w-6 h-6 text-cyan-400 -rotate-12" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-black text-white/90 tracking-[0.2em] uppercase text-sm flex items-center gap-2">
              WordBlaster
            </h1>
            <div className="text-cyan-400 font-bold tracking-widest text-xs mt-0.5">
              LEVEL {level}
            </div>
          </div>
        </div>

        {/* C E N T E R : Score & Combo (Focus của người chơi) */}
        <div className="flex flex-col items-center justify-center relative">
          <div className="flex items-baseline gap-2">
            <Trophy className="w-5 h-5 text-amber-400 hidden sm:block" />
            <span className="text-4xl font-black font-mono text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] tracking-tighter">
              {score.toLocaleString()}
            </span>
          </div>

          {/* Combo Badge - Đặt lơ lửng ngay dưới điểm số để dễ chú ý */}
          <div className="h-6 mt-1">
            {combo > 1 && (
              <div className="flex items-center gap-1.5 bg-orange-500/20 px-3 py-0.5 rounded-full border border-orange-500/40 animate-pulse">
                <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />
                <span className="font-bold font-mono text-orange-400 text-sm tracking-widest">
                  x{combo}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* R I G H T : Lives */}
        <div className="flex items-center justify-end gap-1.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <Heart
              key={i}
              className={`w-7 h-7 transition-all duration-300 ${
                i < lives
                  ? "text-rose-500 fill-rose-500 drop-shadow-[0_0_12px_rgba(244,63,94,0.6)] scale-100"
                  : "text-slate-800 fill-slate-800/40 scale-75 opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
