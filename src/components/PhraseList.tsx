import { VocabularyDaily } from "@/types";

export default function PhraseList({
  vocabulary,
}: {
  vocabulary: VocabularyDaily;
}) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6">
      <h2 className="text-xl font-bold text-blue-800 mb-4">
        How to use `&quot;{vocabulary.word}`&quot;?
      </h2>
      <div className="space-y-4">
        {vocabulary.commonPhrases.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow-sm border border-blue-100"
          >
            <p className="text-lg font-semibold text-gray-800">{item.phrase}</p>
            <p className="text-gray-600 mt-1">{item.meaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
