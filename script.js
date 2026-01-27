let currentAudio = null;
let currentSound = null;

// 🔊 Preloaded sounds cache
const sounds = {};

// 🧠 List every sound name ONCE
const soundList = [
  "Hello4",
  "Thanks-for-asking",
  "More-info-on-Company",
  "Name-is-Elie",
  "Greeting-1",
  "Re-Hello2",
  "Calling-from-1",
  "Name-is-Charlotte",
  "Greeting-3",
  "Can-you-hear",
  "Calling-from-2",
  "Sorry-to-hear-it",
  "Openinga",
  "Ok-Great",
  "From-NYC",
  "Great-Question",
  "Opening12",
  "Good-to-Know",
  "Not-Interested",
  "Rescue4",
  "Opening22",
  "Wonderful2",
  "Not-Interested2",
  "Is-that-ok-1",
  "Opening32",
  "Can-I-speak-to",
  "Can_I_say_something_02",
  "R-u-there",
  "Opening42",
  "Insurance4",
  "How-much-is-it",
  "I-understand",
  "Opening52",
  "Own-Or-Rent",
  "How-Much-is-it-2",
  "Say-again",
  "HO",
  "Limited-Time-Promotion",
  "Say-again2",
  "IF-we-gave",
  "Busy7",
  "4-Left-if-we-gave-you",
  "No-Problem",
  "Transfer6",
  "Current-System",
  "Why-go-with-us",
  "Yes6",
  "Transfer33",
  "Under-Contract2",
  "Affordable8",
  "No8",
  "Transfer43",
  "Buyout8",
  "Dogs4",
  "Sure5",
  "Holdon-a-sec",
  "Upgrade6",
  "Guns5",
  "Good7",
  "Hold6",
  "Upgrade24",
  "Medical-Pendant",
  "Ok9",
  "Not-Interested3",
  "I-m-real",
  "Would-you-like-to",
  "Laugh9",
  "Good-bye",
  "R-u-Dec-maker",
  "Benefit5",
  "Closer-Busy"
];

// 🚀 PRELOAD ALL SOUNDS
soundList.forEach(name => {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.preload = "auto";
  sounds[name] = audio;
});

// ▶️ Play sound
function playSound(soundName) {

  const audio = sounds[soundName];
  if (!audio) return;

  // Same sound already playing → do nothing
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

  currentAudio = audio;
  currentSound = soundName;

  currentAudio.currentTime = 0;
  currentAudio.play().catch(err => {
    console.log("Audio error:", err);
  });

  currentAudio.onended = () => {
    currentAudio = null;
    currentSound = null;
  };
}

// ⏹ Stop button
function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
    currentSound = null;
  }
}
