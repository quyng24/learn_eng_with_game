"use client";
import { VocabularyDaily } from "@/types";
import { useState } from "react";

type Props = {
  vocabulary: VocabularyDaily;
};
export default function WordCard({ vocabulary }: Props) {
  const [showExamples, setShowExamples] = useState(false);
  return (
    <article className="rounded-2xl border p-6">
      {/* Word */}
      <div>
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold">{vocabulary.word}</h2>
          <span className="text-sm text-gray-500">
            {vocabulary.pronunciation}
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-500">{vocabulary.partOfSpeech}</p>
      </div>

      {/* Meaning */}
      <div className="mt-5">
        <h3 className="font-semibold">Meaning</h3>
        <ul className="mt-2 list-disc pl-5">
          {vocabulary.meanings.map((meaning) => (
            <li key={meaning}>{meaning}</li>
          ))}
        </ul>
      </div>

      {/* Common phrases */}
      <div className="mt-5">
        <h3 className="font-semibold">Common phrases</h3>
        <div className="mt-2 space-y-2">
          {vocabulary.commonPhrases.map((item) => (
            <div key={item.phrase} className="rounded-lg bg-gray-50 p-3">
              <p className="font-medium">{item.phrase}</p>
              <p className="text-sm text-gray-500">{item.meaning}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Examples */}
      <button
        onClick={() => setShowExamples(!showExamples)}
        className="mt-5 text-sm font-medium"
      >
        {showExamples ? "Hide examples" : "Show examples"}
      </button>
      {showExamples && (
        <div className="mt-3 space-y-3">
          {vocabulary.examples.map((example) => (
            <div key={example.sentence}>
              <p>{example.sentence}</p>
              <p className="text-sm text-gray-500">{example.translation}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
