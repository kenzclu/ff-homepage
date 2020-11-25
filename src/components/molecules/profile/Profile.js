import React from "react";
import Icon from "../../atoms/icon/Icon";
import "./Profile.scss";

function Profile({ profile, label }) {
  return (
    <div className="profile-container">
      <img className="profile-image" src={profile} />
      <div className="profile-description">
        <h4>{label}</h4>
        <div>LVL: Penultimate</div>
        <div>WAM: 88.36/100</div>
      </div>
    </div>
  );
}

export default Profile;
