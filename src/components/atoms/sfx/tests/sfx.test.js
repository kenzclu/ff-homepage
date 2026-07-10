import {
  isMuted,
  setMuted,
  toggleMuted,
  playMoveSound,
  playConfirmSound,
  playCancelSound,
} from "../sfx";

class MockOscillatorNode {
  constructor() {
    this.frequency = {
      setValueAtTime: jest.fn(),
      exponentialRampToValueAtTime: jest.fn(),
    };
    this.connect = jest.fn();
    this.disconnect = jest.fn();
    this.start = jest.fn();
    this.stop = jest.fn();
  }
}

class MockGainNode {
  constructor() {
    this.gain = {
      setValueAtTime: jest.fn(),
      linearRampToValueAtTime: jest.fn(),
      exponentialRampToValueAtTime: jest.fn(),
    };
    this.connect = jest.fn();
    this.disconnect = jest.fn();
  }
}

class MockAudioContext {
  constructor() {
    this.state = "running";
    this.currentTime = 0;
    this.destination = {};
    this.resume = jest.fn();
  }

  createOscillator() {
    return new MockOscillatorNode();
  }

  createGain() {
    return new MockGainNode();
  }
}

beforeEach(() => {
  localStorage.clear();
  window.AudioContext = MockAudioContext;
});

afterEach(() => {
  delete window.AudioContext;
});

describe("mute state", () => {
  it("defaults to unmuted when nothing is persisted", () => {
    expect(isMuted()).toBe(false);
  });

  it("persists mute state via setMuted", () => {
    setMuted(true);
    expect(isMuted()).toBe(true);
    expect(localStorage.getItem("sfx-muted")).toBe("true");

    setMuted(false);
    expect(isMuted()).toBe(false);
  });

  it("toggleMuted flips and returns the new state", () => {
    expect(toggleMuted()).toBe(true);
    expect(isMuted()).toBe(true);
    expect(toggleMuted()).toBe(false);
    expect(isMuted()).toBe(false);
  });
});

describe("play functions", () => {
  it("do not throw when unmuted and AudioContext is available", () => {
    setMuted(false);
    expect(() => playMoveSound()).not.toThrow();
    expect(() => playConfirmSound()).not.toThrow();
    expect(() => playCancelSound()).not.toThrow();
  });

  it("no-op without constructing an AudioContext when muted", () => {
    setMuted(true);
    const spy = jest.spyOn(window, "AudioContext");
    playMoveSound();
    playConfirmSound();
    playCancelSound();
    expect(spy).not.toHaveBeenCalled();
  });

  it("gracefully no-ops when AudioContext is unsupported", () => {
    setMuted(false);
    delete window.AudioContext;
    delete window.webkitAudioContext;
    expect(() => playMoveSound()).not.toThrow();
  });
});
