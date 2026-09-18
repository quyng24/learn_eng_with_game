// app/daily-learn/exercise/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { EXERCISE_DATA } from "@/data/exercise";
import { VOCABULARY_DAILY } from "@/data/vocabulary";
import WordCard from "@/components/WordCard";

type Phase = "QUIZ" | "RESULT" | "REVIEW";

export default function ExercisePage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("QUIZ");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  const [score, setScore] = useState(0);
  const [incorrectWordIds, setIncorrectWordIds] = useState<string[]>([]);

  const [reviewIndex, setReviewIndex] = useState(0);

  const questions = EXERCISE_DATA;
  const currentQ = questions[currentIndex];

  const handleCheck = () => {
    if (!selectedOption) return;
    setIsChecked(true);

    if (selectedOption === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    } else {
      if (!incorrectWordIds.includes(currentQ.wordId)) {
        setIncorrectWordIds((prev) => [...prev, currentQ.wordId]);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsChecked(false);
    } else {
      setPhase("RESULT");
    }
  };

  /* --------------------------------------------------------
   * RENDER: 1. Fill-in-the-blank Test Interface
   * -------------------------------------------------------- */
  if (phase === "QUIZ") {
    return (
      <div className="max-w-xl mx-auto p-4 min-h-screen flex flex-col justify-center">
        <div className="mb-8">
          <p className="text-sm font-medium text-gray-500 mb-2">
            Question {currentIndex + 1} of {questions.length}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${(currentIndex / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border-2 border-gray-100 p-6 md:p-8 shadow-sm flex-1">
          <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-gray-600 italic">
              &quot;{currentQ.context}&quot;
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
            {currentQ.sentence.split("____").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="inline-block w-24 border-b-2 border-black mx-2 translate-y-1" />
                )}
              </span>
            ))}
          </h2>

          <div className="grid grid-cols-1 gap-3">
            {currentQ.options.map((option) => {
              const isSelected = selectedOption === option;
              const isCorrect = option === currentQ.correctAnswer;

              let btnClass =
                "border-2 border-gray-200 text-gray-700 hover:border-blue-400 hover:bg-blue-50";
              if (isChecked) {
                if (isCorrect)
                  btnClass =
                    "border-2 border-green-500 bg-green-50 text-green-700 font-bold";
                else if (isSelected && !isCorrect)
                  btnClass = "border-2 border-red-500 bg-red-50 text-red-700";
                else
                  btnClass =
                    "border-2 border-gray-100 text-gray-400 opacity-50";
              } else if (isSelected) {
                btnClass =
                  "border-2 border-blue-500 bg-blue-50 text-blue-700 font-bold";
              }

              return (
                <button
                  key={option}
                  disabled={isChecked}
                  onClick={() => setSelectedOption(option)}
                  className={`p-4 rounded-xl text-left text-lg transition-all ${btnClass}`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          {!isChecked ? (
            <button
              onClick={handleCheck}
              disabled={!selectedOption}
              className="w-full py-4 bg-black text-white rounded-xl font-bold text-lg disabled:opacity-30 disabled:bg-gray-400 transition-colors"
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-full py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-colors"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    );
  }

  /* --------------------------------------------------------
   * RENDER: 2. INTERFACE RESULT
   * -------------------------------------------------------- */
  if (phase === "RESULT") {
    const accuracy = Math.round((score / questions.length) * 100);

    return (
      <div className="max-w-md mx-auto p-4 min-h-screen flex items-center justify-center">
        <div className="w-full border-4 border-black p-8 rounded-2xl bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center font-mono">
          <h2 className="text-2xl font-black uppercase tracking-widest border-b-4 border-black pb-4 mb-6">
            Today&apos;s Result
          </h2>

          <div className="text-5xl font-black mb-2">
            {score} / {questions.length}
          </div>
          <div className="text-xl font-bold text-gray-500 mb-8">
            {accuracy}% Accuracy
          </div>

          <div className="text-left font-bold text-lg space-y-3 mb-10 border-t-2 border-dashed border-gray-300 pt-6">
            <p>Words learned: 40</p>
            <p
              className={
                incorrectWordIds.length > 0 ? "text-red-600" : "text-green-600"
              }
            >
              Words to review: {incorrectWordIds.length}
            </p>
          </div>

          {incorrectWordIds.length > 0 ? (
            <button
              onClick={() => setPhase("REVIEW")}
              className="w-full py-3 border-2 border-black font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              [ Review {incorrectWordIds.length} words ]
            </button>
          ) : (
            <button
              onClick={() => router.push("/")}
              className="w-full py-3 bg-black text-white font-bold uppercase tracking-wider"
            >
              [ Back to Home ]
            </button>
          )}
        </div>
      </div>
    );
  }

  /* --------------------------------------------------------
   * RENDER: 3. Review Mistakes
   * -------------------------------------------------------- */
  if (phase === "REVIEW") {
    const reviewWords = VOCABULARY_DAILY.filter((w) =>
      incorrectWordIds.includes(w.id),
    );
    const currentReviewWord = reviewWords[reviewIndex];

    const handleNextReview = () => {
      if (reviewIndex < reviewWords.length - 1) {
        setReviewIndex((prev) => prev + 1);
      } else {
        router.push("/");
      }
    };

    return (
      <div className="max-w-2xl mx-auto p-4 min-h-screen flex flex-col pt-10">
        <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
          Let&apos;s review this word!
        </h2>
        <div className="flex-1">
          <WordCard vocabulary={currentReviewWord} />
        </div>
        <div className="mt-8 pb-8">
          <button
            onClick={handleNextReview}
            className="w-full py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors"
          >
            {reviewIndex === reviewWords.length - 1
              ? "Finish Review"
              : "Next Word"}
          </button>
        </div>
      </div>
    );
  }
}
