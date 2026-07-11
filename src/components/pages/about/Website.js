import React from "react";
import Page from "../../atoms/page/Page";
import PageHeader from "../../molecules/page-header/PageHeader";
import SectionTitle from "../../atoms/section-title/SectionTitle";
import "./Website.scss";

function Website() {
  return (
    <Page back>
      <div className="website">
        <PageHeader
          visual={<div className="website__logo" />}
          name="ABOUT THIS WEBSITE"
        />

        <section className="website__section">
          <SectionTitle>Overview</SectionTitle>
          <p>
            This final-fantasy themed website was built using ReactJS with
            Sass. Routing for the menu is done using <b>react-router</b> and
            code styling is enforced through <b>prettier</b>. The source code
            adheres to the Atomic Design pattern and can be found{" "}
            <u>
              <b>
                <a href="https://github.com/kenzclu/ff-homepage">here</a>
              </b>
            </u>
            .
          </p>
        </section>

        <section className="website__section">
          <SectionTitle>Credits</SectionTitle>
          <p>
            All credit for images and media belong to their respective
            owners, feel free contact me if you want these removed :)
          </p>
        </section>
      </div>
    </Page>
  );
}

export default Website;
