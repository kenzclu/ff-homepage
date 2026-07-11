import React from "react";
import Page from "../../atoms/page/Page";
import PageHeader from "../../molecules/page-header/PageHeader";
import SectionTitle from "../../atoms/section-title/SectionTitle";
import boffy from "../../../assets/boffy.png";
import "./Boffy.scss";

function Boffy() {
  return (
    <Page back>
      <div className="boffy">
        <PageHeader
          visual={
            <img className="boffy__portrait" src={boffy} alt="Boffy" />
          }
          name="BOFFY"
          rows={[
            { label: "PRIMARY", value: "Coton de Tulear" },
            { label: "SECONDARY", value: "Chicken Stick Demolisher" },
          ]}
        />

        <section className="boffy__section">
          <SectionTitle>Description</SectionTitle>
          <p>
            Born July 2023 and recruited straight from the Cotonrun guild,
            Boffy is a Coton de Tulear, a breed from Madagascar known for its
            cotton fluff coat and a personality far bigger than its size. He
            mostly uses his powers for chaos, refusing to listen unless
            there's a treat involved, and randomly triggering his signature
            move, the Zoomies, where he sprints in circles at top speed for
            reasons only he understands.
          </p>
        </section>

        <section className="boffy__section">
          <SectionTitle>Abilities</SectionTitle>
          <p className="boffy__abilities-intro">
            Boffy's signature moves include:
          </p>
          <ul className="boffy__abilities">
            <li>The Zoomies</li>
            <li>Treat Negotiation</li>
            <li>Selective Hearing</li>
            <li>Chaos Incarnate</li>
          </ul>
        </section>
      </div>
    </Page>
  );
}

export default Boffy;
