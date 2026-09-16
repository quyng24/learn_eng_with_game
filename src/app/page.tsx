import Link from "next/link";
import {
  Gamepad2,
  Rocket,
  Brain,
  Sparkles,
  Monitor,
  ArrowRight,
  Lock,
} from "lucide-react";

export default function LingoGamesHub() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500/30">
      {/* 🌌 Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-125 h-125 bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      </div>

      {/* 🚀 Navigation / Header */}
      <nav className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-6 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-linear-to-tr from-cyan-500 to-blue-600 flex items-center justify-center">
            <Gamepad2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-black tracking-widest uppercase">
            Lingo<span className="text-cyan-400">Arcade</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <Link href="#" className="hover:text-white transition-colors">
            Trang chủ
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Bảng xếp hạng
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Hồ sơ
          </Link>
        </div>
      </nav>

      {/* 🎯 Hero Section */}
      <section className="relative z-10 px-6 py-20 lg:py-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4" /> Tổ hợp Game Học Tiếng Anh thế hệ mới
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-blue-200 mb-6 max-w-4xl tracking-tight">
          Học Từ Vựng Tiếng Anh <br className="hidden md:block" /> Không Còn
          Nhàm Chán
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12">
          Kết hợp giữa cơ chế Game Arcade gây nghiện và phương pháp học phản xạ
          ngầm. Chơi vui, nhớ lâu, tăng cường kỹ năng thực chiến.
        </p>
      </section>

      {/* 🎮 Game List Section */}
      <section className="relative z-10 px-6 pb-32 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Gamepad2 className="text-cyan-400" /> Danh Sách Trò Chơi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: WordBlaster */}
          <div className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col">
            <div className="h-48 bg-slate-800 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-tr from-cyan-900/40 to-slate-900"></div>
              <Rocket className="w-20 h-20 text-cyan-400 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />

              {/* Badge Yêu cầu PC */}
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur text-xs font-bold px-2 py-1 rounded border border-slate-700 flex items-center gap-1.5 text-slate-300">
                <Monitor className="w-3 h-3 text-cyan-400" /> PC Only
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex gap-2 mb-3">
                <span className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-cyan-500/10 text-cyan-400">
                  Từ vựng
                </span>
                <span className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-blue-500/10 text-blue-400">
                  Gõ 10 ngón
                </span>
              </div>
              <h3 className="text-2xl font-black mb-2">WordBlaster</h3>
              <p className="text-slate-400 text-sm mb-6 flex-1">
                Luyện phản xạ từ vựng tiếng Anh và tốc độ gõ phím. Bảo vệ tàu vũ
                trụ khỏi những từ vựng rơi xuống.
              </p>

              <Link
                href="/word-blaster"
                className="w-full py-3 px-4 bg-white text-slate-950 text-center font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-50 transition-colors"
              >
                Chơi Ngay <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Placeholder Game 2 */}
          <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl overflow-hidden opacity-75 flex flex-col">
            <div className="h-48 bg-slate-800/50 relative flex items-center justify-center">
              <Brain className="w-16 h-16 text-slate-600" />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm">
                <span className="flex items-center gap-2 font-bold text-slate-300 bg-slate-900 px-4 py-2 rounded-full border border-slate-700">
                  <Lock className="w-4 h-4" /> Sắp ra mắt
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex gap-2 mb-3">
                <span className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-slate-800 text-slate-400">
                  Ngữ pháp
                </span>
              </div>
              <h3 className="text-2xl font-black mb-2 text-slate-300">
                Grammar Ninja
              </h3>
              <p className="text-slate-500 text-sm">
                Chém đứt các lỗi sai ngữ pháp với tốc độ của một Ninja. Phù hợp
                luyện thi TOEIC/IELTS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
