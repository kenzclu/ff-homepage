import React from "react";
import { render } from "@testing-library/react";

import Background from "../Background";

class MockContext2D {
  constructor() {
    this.fillStyle = null;
  }
  setTransform() {}
  fillRect() {}
  beginPath() {}
  arc() {}
  fill() {}
  createRadialGradient() {
    return { addColorStop: () => {} };
  }
}

function mockMatchMedia(matches) {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches,
    media: query,
    addListener: () => {},
    removeListener: () => {},
  }));
}

beforeEach(() => {
  HTMLCanvasElement.prototype.getContext = jest.fn(() => new MockContext2D());
  jest.spyOn(window, "requestAnimationFrame").mockReturnValue(1);
  jest.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
  delete window.matchMedia;
});

describe("Background", () => {
  it("mounts and unmounts without throwing", () => {
    mockMatchMedia(false);
    const { unmount } = render(<Background />);
    expect(() => unmount()).not.toThrow();
  });

  it("does not schedule an animation frame when prefers-reduced-motion is set", () => {
    mockMatchMedia(true);
    render(<Background />);
    expect(window.requestAnimationFrame).not.toHaveBeenCalled();
  });

  it("always renders the scanline overlay", () => {
    mockMatchMedia(false);
    const { container } = render(<Background />);
    expect(container.querySelector(".background-scanlines")).not.toBeNull();
  });

  it("cleans up all listeners and cancels the animation frame on unmount", () => {
    mockMatchMedia(false);
    const addSpy = jest.spyOn(window, "addEventListener");
    const removeSpy = jest.spyOn(window, "removeEventListener");
    const docAddSpy = jest.spyOn(document, "addEventListener");
    const docRemoveSpy = jest.spyOn(document, "removeEventListener");

    const { unmount } = render(<Background />);
    unmount();

    ["resize", "mousemove"].forEach((type) => {
      expect(addSpy).toHaveBeenCalledWith(
        type,
        expect.any(Function),
        expect.anything()
      );
      expect(removeSpy).toHaveBeenCalledWith(type, expect.any(Function));
    });
    expect(addSpy).toHaveBeenCalledWith("mouseleave", expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith("mouseleave", expect.any(Function));
    expect(docAddSpy).toHaveBeenCalledWith(
      "visibilitychange",
      expect.any(Function)
    );
    expect(docRemoveSpy).toHaveBeenCalledWith(
      "visibilitychange",
      expect.any(Function)
    );
    expect(window.cancelAnimationFrame).toHaveBeenCalledWith(1);
  });
});
