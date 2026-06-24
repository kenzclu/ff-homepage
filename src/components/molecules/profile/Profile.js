import React from "react";
import "./Profile.scss";

function Profile({ profile, label }) {
  return (
    <div className="profile-container">
      <img className="profile-image" src={profile} alt="Chubby the chocobo" />
      <div className="profile-description">
        <h4>{label}</h4>
        <div>LVL: Senior Software Engineer</div>
        <div>JOB: Editing Performance @ Canva</div>
      </div>
    </div>
  );
}

export default Profile;
