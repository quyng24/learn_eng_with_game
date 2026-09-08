export interface Word {
    id: string;
    text: string;
    meaning: string;
}

export interface ActiveWord extends Word {
    x: number;
    y: number;
    speed: number;
}

export interface GameState {
    status: "idle" | "playing" | "game-over";
    score: number;
    lives: number;
    combo: number;
    activeWords: ActiveWord[];
    currentInput: string;
    lastMissedWord: Word | null;
    isShaking: boolean;
}

export interface GameStatePhase2 extends Omit<GameState, 'status'> {
    status: "idle" | "playing" | "game-over";
    level: number;
    explosions: Explosion[];
}

export interface Explosion {
    id: string;
    x: number;
    y: number;
    text: string;
    earnedScore: number;
    timeLeft: number;
}