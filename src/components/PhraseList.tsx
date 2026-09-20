"use client";

import { useState } from "react";
import { Sparkles, Volume2 } from "lucide-react";
import { VocabularyDaily } from "@/types";
import { playEnglishAudio } from "@/utils/speech";

export default function PhraseList({ vocabulary }: { vocabulary: VocabularyDaily }) {
  const [playing, setPlaying] = useState<number | null>(null);
  const speak = (phrase: string, index: number) => {
    setPlaying(index);
    playEnglishAudio(phrase);
    window.setTimeout(() => setPlaying(null), 1000);
  };

  return (
    <section className="w-full bg-white border-0 shadow-none sm:border sm:border-slate-200 sm:shadow-xs">
      <div className="border-b border-slate-200 p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700"><Sparkles className="w-4 h-4" /> Cụm từ thông dụng</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">Cách dùng “{vocabulary.word}”</h2>
        <p className="mt-2 text-slate-500">Học theo cụm để dùng từ tự nhiên hơn.</p>
      </div>
      <div className="divide-y divide-slate-200">
        {vocabulary.commonPhrases.map((item, index) => (
          <div key={item.phrase} className="flex items-center justify-between gap-5 p-5 sm:px-8 hover:bg-slate-50 transition-colors">
            <div>
              <p className="text-lg font-bold text-slate-900">{item.phrase}</p>
              <p className="mt-1 text-slate-600">{item.meaning}</p>
            </div>
            <button type="button" onClick={() => speak(item.phrase, index)} aria-label={`Nghe cụm từ ${item.phrase}`} className={`grid h-10 w-10 shrink-0 place-items-center border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors ${playing === index ? "bg-indigo-50" : "bg-white"}`}>
              <Volume2 className={playing === index ? "w-4 h-4 animate-pulse" : "w-4 h-4"} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
