let currentAudio = null;
let currentSound = null;

// Attach click event to all sound buttons
document.querySelectorAll(".sound-btn").forEach(button => {
    button.addEventListener("click", () => {
        const soundName = button.getAttribute("data-sound");
        playSound(soundName);
    });
});

function playSound(soundName) {
    // If the same sound is already playing, do nothing
    if (currentAudio && currentSound === soundName && !currentAudio.paused) {
        return;
    }

    // Stop currently playing sound (if different)
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Play new sound
    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentSound = soundName;

    currentAudio.play();

    // When sound ends, reset state
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
