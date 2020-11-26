import React from "react";
import Page from "../../atoms/page/Page";
import logo from "../../../assets/logo.png";

function Website() {
  return (
    <Page back>
      <h1>About this website</h1>
      <img
        style={{
          display: "block",
          height: "64px",
          width: "auto",
          margin: "1rem auto",
        }}
        src={logo}
        alt="Logo"
      />
      <h2>Hi there.</h2>
      <div>
        This final-fantasy themed website was built using ReactJS with Sass.
        Routing for menu is done using <b>react-router</b> and code styling is
        enforced through <b>prettier</b>. The source code adheres to the Atomic
        Design pattern and can be found{" "}
        <u>
          <b>
            <a href="https://www.github.com/tarotiger/homepage">here</a>
          </b>
        </u>
        .
      </div>
      <h1>Credits</h1>
      <div>
        All credit for images and media belong to their respective owners, feel
        free contact me if you want these removed :)
      </div>
    </Page>
  );
}

export default Website;
