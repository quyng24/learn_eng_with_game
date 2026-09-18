import { VOCABULARY_DAILY } from "@/data/vocabulary";
import { VocabularyDaily } from "@/types";

export function getDailyWords(count: number = 10): VocabularyDaily[] {
    return VOCABULARY_DAILY.slice(0, count);
}