"use client";

import Loading from "@/components/common/Loading";
import ExampleSentence from "@/components/ExampleSentence";
import PhraseList from "@/components/PhraseList";
import WordCard from "@/components/WordCard";
import { LearningStep, VocabularyDaily } from "@/types";
import { getDailyWords } from "@/utils/dailyLesson";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DailyLearnPage() {
  const router = useRouter();
  const [words, setWords] = useState<VocabularyDaily[]>(() =>
    getDailyWords(10),
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [step, setStep] = useState<LearningStep>("WORD");

  if (words.length === 0) return <Loading />;

  const currentWord = words[currentIndex];
  const progress = (currentIndex / words.length) * 100;

  const handleNextStep = () => {
    if (step === "WORD") {
      setStep("PHRASE");
    } else if (step === "PHRASE") {
      setStep("SENTENCE");
    } else if (step === "SENTENCE") {
      if (currentIndex < words.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setStep("WORD");
      } else {
        router.push("daily-learn/exercise");
      }
    }
  };
  return (
    <div className="max-w-2xl mx-auto p-4 min-h-screen flex flex-col">
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>
            Word {currentIndex + 1} of {words.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex-1">
        {step === "WORD" && <WordCard vocabulary={currentWord} />}
        {step === "PHRASE" && <PhraseList vocabulary={currentWord} />}
        {step === "SENTENCE" && <ExampleSentence vocabulary={currentWord} />}
      </div>

      <div className="mt-8 pb-8">
        <button
          onClick={handleNextStep}
          className="w-full py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors"
        >
          {step === "SENTENCE" ? "Next Word" : "Continue"}
        </button>
      </div>
    </div>
  );
}
