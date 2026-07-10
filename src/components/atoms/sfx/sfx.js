const MUTE_STORAGE_KEY = "sfx-muted";

// Default mute state when nothing has been persisted yet.
const DEFAULT_MUTED = false;

// Lazily-created singleton AudioContext. Browsers require it to be created
// (or resumed) after a user gesture, and creating a new one per sound is
// wasteful, so we create it once on first play and reuse it thereafter.
let audioContext = null;

const getAudioContext = () => {
  if (audioContext) {
    return audioContext;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    // Very old / unsupported browser — no-op gracefully instead of throwing.
    return null;
  }

  audioContext = new AudioContextClass();
  return audioContext;
};

// In-memory cache of the mute state so repeated `isMuted()` calls on the
// hot path (e.g. one per arrow-key press) don't hit localStorage each time.
// Populated lazily on first read and kept in sync by `setMuted`.
let cachedMuted = null;

export const isMuted = () => {
  if (cachedMuted === null) {
    const stored = localStorage.getItem(MUTE_STORAGE_KEY);
    cachedMuted = stored === null ? DEFAULT_MUTED : stored === "true";
  }
  return cachedMuted;
};

export const setMuted = (muted) => {
  cachedMuted = muted;
  localStorage.setItem(MUTE_STORAGE_KEY, muted ? "true" : "false");
};

export const toggleMuted = () => {
  const next = !isMuted();
  setMuted(next);
  return next;
};

// Plays a single oscillator tone shaped by a short attack/decay gain
// envelope, so it doesn't click/pop and doesn't ring out. `startFreq` and
// `endFreq` may differ to produce an upward/downward sweep.
const playTone = ({ type, startFreq, endFreq, duration, volume = 0.2 }) => {
  if (isMuted()) {
    return;
  }

  const ctx = getAudioContext();
  if (!ctx) {
    return;
  }

  if (ctx.state === "suspended") {
    ctx.resume();
  }

  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  const now = ctx.currentTime;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(startFreq, now);
  if (endFreq) {
    oscillator.frequency.exponentialRampToValueAtTime(endFreq, now + duration);
  }

  // Quick attack, quick decay envelope (~10ms attack, exponential decay to
  // (near) silence by the end of the tone).
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(volume, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  oscillator.connect(gain);
  gain.connect(ctx.destination);

  oscillator.onended = () => {
    oscillator.disconnect();
    gain.disconnect();
  };

  oscillator.start(now);
  oscillator.stop(now + duration + 0.02);
};

// Short, light blip for arrow-key navigation between menu options.
export const playMoveSound = () => {
  playTone({
    type: "square",
    startFreq: 660,
    duration: 0.06,
    volume: 0.15,
  });
};

// Slightly longer, upward-sweeping tone for confirming a menu selection.
export const playConfirmSound = () => {
  playTone({
    type: "triangle",
    startFreq: 523.25,
    endFreq: 1046.5,
    duration: 0.15,
    volume: 0.2,
  });
};

// Downward-sweeping tone, audibly distinct from confirm, for backing out of
// a sub-view.
export const playCancelSound = () => {
  playTone({
    type: "sine",
    startFreq: 440,
    endFreq: 220,
    duration: 0.18,
    volume: 0.2,
  });
};
