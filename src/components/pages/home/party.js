import profile from "../../../assets/profile.jpg";
import boffy from "../../../assets/boffy.png";

// Array-driven party (character) list for the Home page's left pane.
const party = [
  {
    name: "Kenneth Lu",
    profile,
    link: "/about",
    rows: [
      { label: "LVL", value: "Senior Software Engineer" },
      { label: "JOB", value: "Editing Performance @ Canva" },
    ],
  },
  {
    name: "Boffy",
    profile: boffy,
    link: "/about/boffy",
    rows: [
      { label: "LVL", value: "Coton de Tulear" },
      { label: "JOB", value: "Chicken Stick Demolisher" },
    ],
  },
];

export default party;
