"use client";

import { GameProvider } from "@/hooks/useGameEngine";
import WordBlaster from "@/components/WordBlaster";

export default function Game() {
  return (
    <GameProvider>
      <WordBlaster />
    </GameProvider>
  );
}
