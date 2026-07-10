import React from "react";

import "./StatBar.scss";

function StatBar({ label, value }) {
  return (
    <div className={`stat-bar stat-bar-${label.toLowerCase()}`}>
      <span className="stat-bar-label">{label}</span>
      <div className="stat-bar-track">
        <div className="stat-bar-fill" style={{ width: `${value}%` }} />
      </div>
      <span className="stat-bar-value">{value}%</span>
    </div>
  );
}

export default StatBar;
