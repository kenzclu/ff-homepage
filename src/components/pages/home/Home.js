import React from "react";

import Icon from "../../atoms/icon/Icon";
import linkedin from "../../../assets/linkedin.png";
import document from "../../../assets/document.png";
import github from "../../../assets/github.png";
import profile from "../../../assets/profile.jpg";
import Profile from "../../molecules/profile/Profile";
import Option from "../../atoms/option/Option";
import "./Home.scss";
import Page from "../../atoms/page/Page";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Page>
      <h1><u>Characters</u></h1>
      <div className="menu-container">
        <div className="profile">
          <Link to="/about">
            <Profile profile={profile} label="Kenneth Lu" />
          </Link>
        </div>
      </div>
      <h1><u>Menu</u></h1>
      <div className="menu-options">
        <Link to="/status">
          <Option option="STATUS" />
        </Link>
        <Link to="/item">
          <Option option="ITEMS" />
        </Link>
        <Link to="/contact">
          <Option option="OPTIONS" />
        </Link>
      </div>
    </Page>
    // <div>
    //   Welcome to my portfolio built using ReactJS,
    //   you can view the source code{" "}
    //   <a
    //     href="https://github.com/tarotiger/homepage"
    //     style={{ textDecoration: "underline" }}
    //     target="_blank"
    //   >
    //     here
    //   </a>
    //   .
    // </div>
    // <div className="container">
    //   <Icon
    //     src={linkedin}
    //     href="https://www.linkedin.com/in/kenneth-zc-lu/"
    //     label="LinkedIn"
    //   />
    //   <Icon
    //     src={document}
    //     href="/about/resume"
    //     label="Resume"
    //   />
    //   <Icon src={github} href="https://github.com/tarotiger" label="Github" />
    // </div>
  );
}

export default Home;
