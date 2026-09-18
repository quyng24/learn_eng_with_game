import { VocabularyDaily } from "@/types";

export default function ExampleSentence({
  vocabulary,
}: {
  vocabulary: VocabularyDaily;
}) {
  return (
    <div className="rounded-2xl border border-green-100 bg-green-50/50 p-6">
      <h2 className="text-xl font-bold text-green-800 mb-4">
        `&quot;{vocabulary.word}`&quot; in real context
      </h2>
      <div className="space-y-4">
        {vocabulary.examples.map((example, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow-sm border border-green-100"
          >
            <p className="text-lg text-gray-800">
              {example.sentence
                .split(new RegExp(`(${vocabulary.word}[a-z]*)`, "gi"))
                .map((part, i) =>
                  part
                    .toLowerCase()
                    .startsWith(vocabulary.word.toLowerCase()) ? (
                    <span key={i} className="font-bold text-green-600">
                      {part}
                    </span>
                  ) : (
                    part
                  ),
                )}
            </p>
            <p className="text-gray-600 mt-2 italic">{example.translation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
