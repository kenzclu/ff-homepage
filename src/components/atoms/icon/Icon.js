import React from "react";

import "./Icon.scss";

function Icon({ src, label, ...rest }) {
  return (
    <div className="icon">
      <a {...rest} alt={label} target="_blank">
        <img src={src} />
      </a>
      <div>{label}</div>
    </div>
  );
}

export default Icon;
