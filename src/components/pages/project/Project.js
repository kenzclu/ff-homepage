import React, { useState, useEffect } from "react";
import dnd from "../../../assets/dnd.png";
import webdev from "../../../assets/webdev.png";
import uni from "../../../assets/uni.png";
import Page from "../../atoms/page/Page";
import "./Project.scss";

const projects = [
  {
    name: "D&D Soundboard",
    github: "https://github.com/tarotiger/dnd-soundboard",
    url: "https://tarotiger.github.io/dnd-soundboard/",
    img: dnd,
    description:
      "Personal interest project for learning ReactJS. Soundboard for the tabletop role-playing game Dungeons & Dragons. Features an interactive and simple user interface which supports both mobile and desktop use. Allows users to combine various soundtracks to create their desired ambient sound for any situation. Instant sounds are also available for added dramatic effect.",
  },
  {
    name: "Web Development Workshop",
    github: "https://github.com/tarotiger/web-dev-workshop",
    img: webdev,
    description:
      "Web development workshop made for the Winter 2020 CSESoc CompClub workshop. Compclub is the education portfolio under the student run society CSE which aims to introduce high school students to programming. This workshop covers the basics of HTML, CSS and JS as we teach students how to create their very own Olympic-themed countdown website.",
  },
  {
    name: "UNSW Assignments",
    github: "https://github.com/tarotiger/uni-projects",
    img: uni,
    description:
      "Condensed list of fun university assignment I have completed. Examples include include a Git clone written in Bash and Perl as well as a command shell written in C.",
  },
];

function Project() {
  const selectedProject = localStorage.getItem("p-item");
  const [project, setProject] = useState(selectedProject || 0);

  useEffect(() => {
    localStorage.setItem("p-item", project);
  }, [project]);

  const projectToDisplay = projects[project];
  console.log(project);
  return (
    <Page back>
      <div className="project-page">
        <div className="project-navigation">
          <h3
            className="navigation"
            onClick={() =>
              setProject((project - 1 + projects.length) % projects.length)
            }
          >
            {"< PREV"}
          </h3>
          <h3
            className="navigation"
            onClick={() => setProject((project + 1) % projects.length)}
          >
            {"NEXT >"}
          </h3>
        </div>
        <div className="project-container">
          <img src={projectToDisplay.img} alt={projectToDisplay.name} />
          <h1>{projectToDisplay.name}</h1>
          <h5>
            {"GITHUB: "}
            <a href={projectToDisplay.github}>{projectToDisplay.github}</a>
          </h5>
          {projectToDisplay.url && (
            <h5>
              {"URL: "}
              <a href={projectToDisplay.url}>{projectToDisplay.url}</a>
            </h5>
          )}
          <div>{projectToDisplay.description}</div>
        </div>
      </div>
    </Page>
  );
}

export default Project;
