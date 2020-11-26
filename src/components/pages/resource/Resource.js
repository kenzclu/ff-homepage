import React from "react";
import "./Resource.scss";
import Page from "../../atoms/page/Page";
import Icon from "../../atoms/icon/Icon";
import linkedin from "../../../assets/linkedin.png";
import document from "../../../assets/document.png";
import github from "../../../assets/github.png";

function Resource() {
  return (
    <Page back>
      <h1>
        <u>ITEMS</u>
      </h1>
      <h3>Inventory</h3>
      <div className="test">
        <Icon
          src={linkedin}
          href="https://www.linkedin.com/in/kenneth-zc-lu/"
          label="LinkedIn"
        />
        <Icon src={document} href="/about/resume" label="Resume" />
        <Icon src={github} href="https://github.com/tarotiger" label="Github" />
      </div>
    </Page>
  );
}

export default Resource;
