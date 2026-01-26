let currentAudio = null;
let currentSound = null;

// Play sound
function playSound(soundName) {

    // If same sound is already playing → do nothing
    if (
        currentAudio &&
        currentSound === soundName &&
        !currentAudio.paused
    ) {
        return;
    }

    // Stop current sound
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Create & play new sound
    currentAudio = new Audio("sounds/" + soundName + ".mp3");
    currentSound = soundName;

    currentAudio.play().catch(err => {
        console.log("Audio error:", err);
    });

    // Reset when finished
    currentAudio.onended = () => {
        currentAudio = null;
        currentSound = null;
    };
}

// Stop button
function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
        currentSound = null;
    }
}
