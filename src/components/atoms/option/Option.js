import React from "react";
import "./Option.scss";

/**
 * A single FF-style menu option.
 *
 * Usage stays backward compatible with the original `<Option option="X" />`
 * call signature — it's typically rendered inside a react-router `<Link>`,
 * e.g. `<Link to="/about"><Option option="WEBSITE" /></Link>`. The cursor +
 * gold "selected" treatment activates on hover *and* on keyboard focus of
 * that ancestor `<Link>` (see Option.scss), so no local hover state is
 * needed here — it's driven entirely by CSS.
 *
 * @param {string} option - the label text to render.
 * @param {boolean} [selected] - optional: force the cursor/gold "selected"
 *   visual state on, regardless of hover/focus (e.g. for roving-focus logic
 *   driven by a parent). Defaults to false and is purely additive.
 */
function Option({ option, selected = false }) {
  const className = ["option", selected ? "option--selected" : null]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <span className="option__gutter" aria-hidden="true">
        {">"}
      </span>
      <span className="option__text">{option}</span>
    </div>
  );
}

export default Option;
