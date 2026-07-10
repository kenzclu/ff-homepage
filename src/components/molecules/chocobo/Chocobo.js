import React, { useState, useEffect } from "react";
import "./Chocobo.scss";

const PACE_DISTANCE = 120;
const WALK_DURATION_MS = 3750;
const IDLE_DURATION_MS = 2400;

const PHASES = [
  { sprite: "idle", x: 0, duration: IDLE_DURATION_MS },
  { sprite: "walk-right", x: PACE_DISTANCE, duration: WALK_DURATION_MS },
  { sprite: "idle", x: PACE_DISTANCE, duration: IDLE_DURATION_MS, direction: -1 },
  { sprite: "walk-left", x: 0, duration: WALK_DURATION_MS },
];

function Chocobo() {
  const [phaseIndex, setPhaseIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhaseIndex((index) => (index + 1) % PHASES.length);
    }, PHASES[phaseIndex].duration);

    return () => clearTimeout(timer);
  }, [phaseIndex]);

  const { sprite, x, direction = 1 } = PHASES[phaseIndex];
  const heightOffset = sprite === "idle" ? 5 : 0;

  return (
    <div
      className="chocobo-walker"
      style={{
        transform: `translateX(${x}px)`,
        transition: `transform ${WALK_DURATION_MS}ms linear`,
      }}
    >
      <div
        className={`chocobo-sprite chocobo-sprite--${sprite}`}
        style={{ transform: `scaleX(${direction}) translateY(${heightOffset}px)` }}
      />
    </div>
  );
}

export default Chocobo;
