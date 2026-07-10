import React from "react";

import "./StatBar.scss";

function StatBar({ label, value, max }) {
  return (
    <div className={`stat-bar stat-bar-${label.toLowerCase()}`}>
      <span className="stat-bar-label">{label}</span>
      <div className="stat-bar-track">
        <div className="stat-bar-fill" style={{ width: `${(value / max) * 100}%` }} />
        <span className="stat-bar-value">{value}/{max}</span>
      </div>
    </div>
  );
}

export default StatBar;
