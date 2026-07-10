import React from "react";
import classNames from "classnames";
import "./Option.scss";

/**
 * A single FF-style menu option, typically rendered inside a react-router
 * `<Link>` (e.g. `<Link to="/about"><Option option="WEBSITE" /></Link>`).
 * The cursor + gold "selected" treatment is driven by CSS, on hover and on
 * keyboard focus of that ancestor `<Link>` (see Option.scss) — no local
 * hover state is needed here.
 *
 * @param {string} option - the label text to render.
 * @param {boolean} [selected] - force the "selected" visual state on,
 *   regardless of hover/focus (e.g. for roving-focus logic driven by a
 *   parent). Defaults to false.
 */
function Option({ option, selected = false }) {
  return (
    <div className={classNames("option", { "option--selected": selected })}>
      <span className="option__gutter" aria-hidden="true">
        {">"}
      </span>
      <span className="option__text">{option}</span>
    </div>
  );
}

export default Option;
