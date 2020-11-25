import React, { useState } from "react";
import "./Option.scss";

function Option({ option }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="option"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {`${isHovered ? "> " : ""} ${option}`}
    </div>
  );
}

export default Option;
