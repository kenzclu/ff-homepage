import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Profile from "../../molecules/profile/Profile";
import Option from "../../atoms/option/Option";
import Page from "../../atoms/page/Page";
import party from "./party";
import {
  playMoveSound,
  playConfirmSound,
  playCancelSound,
} from "../../atoms/sfx/sfx";
import "./Home.scss";

// Right-pane command menu. PARTY is handled separately (index 0) since it
// switches focus into the left pane rather than navigating to a route.
const menuItems = [
  { label: "WEBSITE", to: "/about/website" },
  { label: "RESOURCES", to: "/resources" },
  { label: "PROJECTS", to: "/projects" },
  { label: "CONTACT", to: "/contact" },
];

function Home() {
  // Roving DOM focus: refs to the real anchor elements, in visual/nav
  // order. index 0 of menuRefs is always the PARTY entry.
  const menuRefs = useRef([]);
  const partyRefs = useRef([]);

  const focusMenuItem = (index) => {
    const total = menuRefs.current.length;
    menuRefs.current[(index + total) % total]?.focus();
  };

  const handleMenuKeyDown = (event, index) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      playMoveSound();
      focusMenuItem(index + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      playMoveSound();
      focusMenuItem(index - 1);
    }
  };

  // Selecting PARTY (Enter or click) doesn't navigate anywhere — it moves
  // focus into the left pane, onto the first party member.
  const handleSelectParty = (event) => {
    event.preventDefault();
    playConfirmSound();
    partyRefs.current[0]?.focus();
  };

  // Backspace from within the party pane returns focus to the PARTY entry.
  const handlePartyKeyDown = (event) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      playCancelSound();
      menuRefs.current[0]?.focus();
    }
  };

  return (
    <Page>
      <div className="home-panes">
        <div className="party-pane" id="party-pane">
          <h1>
            <u>Party</u>
          </h1>
          <div className="party-list">
            {party.map((member, index) => (
              <Link
                key={member.name}
                to={member.link}
                ref={(el) => {
                  partyRefs.current[index] = el;
                }}
                onKeyDown={handlePartyKeyDown}
              >
                <Profile profile={member.profile} label={member.name} />
              </Link>
            ))}
          </div>
        </div>
        <div className="menu-pane">
          <h1>
            <u>Menu</u>
          </h1>
          <div className="menu-options">
            <a
              href="#party-pane"
              ref={(el) => {
                menuRefs.current[0] = el;
              }}
              onClick={handleSelectParty}
              onKeyDown={(event) => handleMenuKeyDown(event, 0)}
            >
              <Option option="PARTY" />
            </a>
            {menuItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.to}
                ref={(el) => {
                  menuRefs.current[index + 1] = el;
                }}
                onClick={playConfirmSound}
                onKeyDown={(event) => handleMenuKeyDown(event, index + 1)}
              >
                <Option option={item.label} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Home;
