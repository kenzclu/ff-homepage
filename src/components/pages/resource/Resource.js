import React from "react";
import "./Resource.scss";
import Page from "../../atoms/page/Page";
import PageHeader from "../../molecules/page-header/PageHeader";
import SectionTitle from "../../atoms/section-title/SectionTitle";
import Icon from "../../atoms/icon/Icon";
import linkedin from "../../../assets/linkedin.png";
import github from "../../../assets/github.png";

function Resource() {
  return (
    <Page back>
      <div className="resource">
        <PageHeader
          name="ADDITIONAL INFO"
          rows={[
            { label: "SUMMARY", value: "Academic career and work experience" },
          ]}
        />

        <section className="resource__section">
          <SectionTitle>Links</SectionTitle>
          <div className="resource__links">
            <Icon
              src={linkedin}
              href="https://www.linkedin.com/in/kenneth-zc-lu/"
              label="LinkedIn"
            />
            <Icon
              src={github}
              href="https://github.com/kenzclu"
              label="Github"
            />
          </div>
        </section>
      </div>
    </Page>
  );
}

export default Resource;
