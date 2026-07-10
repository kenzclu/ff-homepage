import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Profile from "../../molecules/profile/Profile";
import Option from "../../atoms/option/Option";
import Page from "../../atoms/page/Page";
import party from "./party";
import { playMoveSound, playConfirmSound } from "../../atoms/sfx/sfx";
import "./Home.scss";

const menuItems = [
  { label: "WEBSITE", to: "/about/website" },
  { label: "RESOURCES", to: "/resources" },
  { label: "PROJECTS", to: "/projects" },
  { label: "CONTACT", to: "/contact" },
];

function Home() {
  // Roving DOM focus: refs to the real anchor elements, in visual/nav order.
  const menuRefs = useRef([]);

  const setMenuRef = (index) => (el) => {
    menuRefs.current[index] = el;
  };

  const focusMenuItem = (index) => {
    const total = menuRefs.current.length;
    menuRefs.current[(index + total) % total]?.focus();
  };

  // Autofocus the first menu item on mount so arrow-key nav works
  // immediately, without requiring a Tab press first.
  useEffect(() => {
    menuRefs.current[0]?.focus();
  }, []);

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

  return (
    <Page>
      <div className="home-panes">
        <div className="menu-pane">
          <h1>
            <u>Menu</u>
          </h1>
          <div className="menu-options">
            {menuItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.to}
                ref={setMenuRef(index)}
                onClick={playConfirmSound}
                onKeyDown={(event) => handleMenuKeyDown(event, index)}
              >
                <Option option={item.label} />
              </Link>
            ))}
          </div>
        </div>
        <div className="party-pane">
          <h1>
            <u>Party</u>
          </h1>
          <div className="party-list">
            {party.map((member) => (
              <Link key={member.name} to={member.link}>
                <Profile profile={member.profile} label={member.name} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Home;
