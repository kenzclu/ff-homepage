import React, { useState } from "react";

import StatBar from "../../atoms/stat-bar/StatBar";
import "./Profile.scss";

// Random stat value between 75 and 100 (inclusive-ish), rounded to whole number
function randomStat() {
  return Math.floor(Math.random() * (100 - 75 + 1)) + 75;
}

function Profile({ profile, label }) {
  // Computed once per mount so the values don't jitter on re-render
  const [{ hp, mp }] = useState(() => ({ hp: randomStat(), mp: randomStat() }));

  return (
    <div className="profile-container">
      <img className="profile-image" src={profile} alt="Chubby the chocobo" />
      <div className="profile-description">
        <h4>{label}</h4>
        <div>LVL: Senior Software Engineer</div>
        <div>JOB: Editing Performance @ Canva</div>
        <div className="profile-stats">
          <StatBar label="HP" value={hp} />
          <StatBar label="MP" value={mp} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
