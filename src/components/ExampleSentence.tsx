"use client";

import { useState } from "react";
import { MessageSquareQuote, Volume2 } from "lucide-react";
import { VocabularyDaily } from "@/types";
import { playEnglishAudio } from "@/utils/speech";

export default function ExampleSentence({ vocabulary }: { vocabulary: VocabularyDaily }) {
  const [playing, setPlaying] = useState<number | null>(null);
  const speak = (sentence: string, index: number) => {
    setPlaying(index);
    playEnglishAudio(sentence, 0.85);
    window.setTimeout(() => setPlaying(null), 1400);
  };
  const highlight = (sentence: string) => {
    const parts = sentence.split(new RegExp(`(${vocabulary.word}[a-zA-Z]*)`, "gi"));
    return parts.map((part, index) => part.toLowerCase().startsWith(vocabulary.word.toLowerCase()) ? <strong key={index} className="font-black text-emerald-700">{part}</strong> : part);
  };

  return (
    <section className="w-full bg-white border-0 shadow-none sm:border sm:border-slate-200 sm:shadow-xs">
      <div className="border-b border-slate-200 p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700"><MessageSquareQuote className="w-4 h-4" /> Ngữ cảnh thực tế</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">“{vocabulary.word}” trong câu</h2>
        <p className="mt-2 text-slate-500">Nghe câu hoàn chỉnh, sau đó thử lặp lại thành tiếng.</p>
      </div>
      <div className="divide-y divide-slate-200">
        {vocabulary.examples.map((example, index) => (
          <div key={example.sentence} className="flex items-start justify-between gap-5 p-5 sm:px-8 hover:bg-slate-50 transition-colors">
            <div>
              <p className="text-lg leading-relaxed text-slate-900">{highlight(example.sentence)}</p>
              <p className="mt-2 italic text-slate-600">{example.translation}</p>
            </div>
            <button type="button" onClick={() => speak(example.sentence, index)} aria-label="Nghe câu ví dụ" className={`grid h-10 w-10 shrink-0 place-items-center border border-slate-200 text-slate-600 hover:border-emerald-300 hover:text-emerald-700 transition-colors ${playing === index ? "bg-emerald-50" : "bg-white"}`}>
              <Volume2 className={playing === index ? "w-4 h-4 animate-pulse" : "w-4 h-4"} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
