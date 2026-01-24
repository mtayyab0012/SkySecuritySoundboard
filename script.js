let currentAudio = null;

// Attach click event to all sound buttons
document.querySelectorAll(".sound-btn").forEach(button => {
    button.addEventListener("click", () => {
        const soundName = button.getAttribute("data-sound");
        playSound(soundName);
    });
});

function playSound(soundName) {
    // Stop any already playing sound
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Play new sound
    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentAudio.play();
}

// Stop button function
function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}
