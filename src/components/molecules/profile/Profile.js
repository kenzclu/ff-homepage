import React, { useState } from "react";

import StatBar from "../../atoms/stat-bar/StatBar";
import "./Profile.scss";

const MAX_HP = 100;
const MAX_MP = 50;

// Random stat value between 75% and 100% of max (inclusive-ish), rounded to whole number
function randomStat(max) {
  const min = Math.floor(max * 0.75);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Profile({ profile, label }) {
  // Computed once per mount so the values don't jitter on re-render
  const [{ hp, mp }] = useState(() => ({ hp: randomStat(MAX_HP), mp: randomStat(MAX_MP) }));

  return (
    <div className="profile-container">
      <img className="profile-image" src={profile} alt="Chubby the chocobo" />
      <div className="profile-description">
        <h4>{label}</h4>
        <div>LVL: Senior Software Engineer</div>
        <div>JOB: Editing Performance @ Canva</div>
        <div className="profile-stats">
          <StatBar label="HP" value={hp} max={MAX_HP} />
          <StatBar label="MP" value={mp} max={MAX_MP} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
