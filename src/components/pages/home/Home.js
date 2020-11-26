import React from "react";
import profile from "../../../assets/profile.jpg";
import Profile from "../../molecules/profile/Profile";
import Option from "../../atoms/option/Option";
import Page from "../../atoms/page/Page";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <Page>
      <h1>
        <u>Characters</u>
      </h1>
      <div className="menu-container">
        <div className="profile">
          <Link to="/about">
            <Profile profile={profile} label="Kenneth Lu" />
          </Link>
        </div>
      </div>
      <h1>
        <u>Menu</u>
      </h1>
      <div className="menu-options">
        <Link to="/status">
          <Option option="STATUS" />
        </Link>
        <Link to="/resources">
          <Option option="ITEMS" />
        </Link>
        <Link to="/contact">
          <Option option="OPTIONS" />
        </Link>
      </div>
    </Page>
  );
}

export default Home;
