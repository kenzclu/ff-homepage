import React from "react";

import "./Icon.scss";

function Icon({ src, label, ...rest }) {
  return (
    <div className="icon">
      <a {...rest} target="_blank">
        <img src={src} alt={label} />
      </a>
      <div>{label}</div>
    </div>
  );
}

export default Icon;
