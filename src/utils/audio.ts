class AudioSystem {
    private sounds: Record<string, HTMLAudioElement> = {};
    private isMuted = false;

    init() {
        if(typeof window === "undefined") return;
        this.sounds = {
            explosion: new Audio("/sounds/sound1.mp3"),
            levelUp: new Audio("/sounds/sound2.mp3"),
            error: new Audio("/sounds/sound3.mp3")
        }

        Object.values(this.sounds).forEach(audio => {
            audio.volume = 0.3;
        });
    }

    play(name: "explosion" | "levelUp" | "error") {
        if(this.isMuted || !this.sounds[name]) return;

        const sound = this.sounds[name];
        sound.currentTime = 0;
        sound.play().catch(e => console.log("Audio blocked by brower", e));
    }
}

export const audioSystem = new AudioSystem();