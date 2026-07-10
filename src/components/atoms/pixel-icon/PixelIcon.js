import React from "react";

import "./PixelIcon.scss";

// Expressed in terms of the --pixel-size custom property (rather than a
// literal px size) so a CSS media query can rescale the whole icon later by
// overriding just that one variable, instead of fighting inline-style
// specificity.
function toBoxShadow(bitmap) {
  const shadows = [];
  bitmap.forEach((row, y) => {
    [...row].forEach((cell, x) => {
      if (cell === "1") {
        shadows.push(
          `calc(var(--pixel-size) * ${x}) calc(var(--pixel-size) * ${y}) currentColor`
        );
      }
    });
  });
  return shadows.join(", ");
}

// Bitmaps passed in are always the same module-level array reference, so
// cache the computed box-shadow per bitmap instead of rebuilding it on every
// render.
const shadowCache = new WeakMap();

function getBoxShadow(bitmap) {
  if (!shadowCache.has(bitmap)) {
    shadowCache.set(bitmap, toBoxShadow(bitmap));
  }
  return shadowCache.get(bitmap);
}

// Renders a bitmap (array of "0"/"1" row strings) as solid CSS pixels
// (box-shadow technique) instead of an image asset, so the icon recolors for
// free via `currentColor` whenever the parent's `color` changes (e.g. the
// existing hover/focus gold treatment).
function PixelIcon({ bitmap }) {
  const rows = bitmap.length;
  const cols = bitmap[0].length;

  return (
    <span
      className="pixel-icon"
      aria-hidden="true"
      style={{
        width: `calc(var(--pixel-size) * ${cols})`,
        height: `calc(var(--pixel-size) * ${rows})`,
        "--pixel-shadow": getBoxShadow(bitmap),
      }}
    />
  );
}

export default PixelIcon;
