"use client";

import { CheckCircle2, Lightbulb, XCircle } from "lucide-react";
import { ExerciseQuestion } from "@/types";

const labels = ["A", "B", "C", "D"];

export default function ExerciseCard({ question, selectedOption, isChecked, onSelectOption }: {
  question: ExerciseQuestion;
  selectedOption: string | null;
  isChecked: boolean;
  onSelectOption: (option: string) => void;
}) {
  const isCorrectChoice = selectedOption === question.correctAnswer;

  return (
    <section className="w-full bg-white border-0 shadow-none sm:border sm:border-slate-200 sm:shadow-xs">
      <div className="border-b border-slate-200 bg-amber-50/70 p-5 sm:p-7">
        <div className="flex items-start gap-3">
          <Lightbulb className="mt-0.5 w-5 h-5 shrink-0 text-amber-600" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-800">Tình huống</p>
            <p className="mt-1 text-slate-800">“{question.context}”</p>
          </div>
        </div>
      </div>
      <div className="p-5 sm:p-7 md:p-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed sm:leading-loose text-slate-900">
          {question.sentence.split("____").map((part, index, parts) => (
            <span key={`${part}-${index}`}>
              {part}
              {index < parts.length - 1 && (
                <span className={`mx-2 inline-flex min-w-28 items-center justify-center border-b-2 px-3 py-1 text-lg font-bold ${isChecked ? isCorrectChoice ? "border-emerald-500 bg-emerald-50 text-emerald-800" : "border-rose-500 bg-rose-50 text-rose-800" : selectedOption ? "border-indigo-500 bg-indigo-50 text-indigo-800" : "border-slate-400 text-slate-400"}`}>
                  {selectedOption || "____"}
                </span>
              )}
            </span>
          ))}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {question.options.map((option, index) => {
            const selected = selectedOption === option;
            const correct = option === question.correctAnswer;
            const state = isChecked
              ? correct ? "border-emerald-500 bg-emerald-50 text-emerald-950" : selected ? "border-rose-500 bg-rose-50 text-rose-950" : "border-slate-200 text-slate-400 opacity-60"
              : selected ? "border-indigo-600 bg-indigo-50 text-indigo-950" : "border-slate-200 text-slate-800 hover:border-indigo-300 hover:bg-slate-50";
            return (
              <button key={option} type="button" disabled={isChecked} onClick={() => onSelectOption(option)} className={`flex items-center gap-3 border-2 p-4 text-left transition-colors disabled:cursor-default ${state}`}>
                <span className={`grid h-8 w-8 shrink-0 place-items-center text-sm font-bold ${isChecked && correct ? "bg-emerald-600 text-white" : isChecked && selected ? "bg-rose-600 text-white" : selected ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"}`}>{labels[index]}</span>
                <span className="flex-1 font-medium">{option}</span>
                {isChecked && correct && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                {isChecked && selected && !correct && <XCircle className="w-5 h-5 text-rose-600" />}
              </button>
            );
          })}
        </div>
        {isChecked && (
          <div className={`mt-6 flex items-center gap-3 border-l-4 p-4 ${isCorrectChoice ? "border-emerald-500 bg-emerald-50 text-emerald-900" : "border-rose-500 bg-rose-50 text-rose-900"}`}>
            {isCorrectChoice ? <CheckCircle2 className="w-6 h-6 shrink-0" /> : <XCircle className="w-6 h-6 shrink-0" />}
            <p className="font-semibold">{isCorrectChoice ? "Chính xác! Làm rất tốt." : <>Đáp án đúng là: <strong>{question.correctAnswer}</strong>.</>}</p>
          </div>
        )}
      </div>
    </section>
  );
}
