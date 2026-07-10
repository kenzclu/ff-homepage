import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import chock from "../../../assets/chocobo.gif";
import { paths } from "../../../router";
import { isMuted, toggleMuted } from "../../atoms/sfx/sfx";
import "./navbar.scss";

function Navbar() {
  const history = useHistory();
  const lastActiveTab = parseInt(localStorage.getItem("lastActive"));
  const [activeTab, setActiveTab] = useState(lastActiveTab || 0);
  const [muted, setMuted] = useState(false);

  // Initialize the displayed mute state from whatever was persisted in a
  // previous session (localStorage), not just component default state.
  useEffect(() => {
    setMuted(isMuted());
  }, []);

  useEffect(() => {
    setActiveTab(
      paths.findIndex((path) => path.path === history.location.pathname)
    );
  }, [history.location]);

  useEffect(() => {
    history.listen(() => {
      setActiveTab(
        paths.findIndex((path) => path.path === history.location.pathname)
      );
    });
  });

  // Home is always index 0 in `paths` (see router.js).
  const isHome = activeTab === 0;

  const handleToggleMute = () => {
    setMuted(toggleMuted());
  };

  return (
    <div className="navbar">
      <div className="bottom">
        <div className="side left">
          <img src={chock} alt="chocobo running" />
          {isHome ? (
            <span className="home-shortcut is-disabled" aria-disabled="true">
              Home
            </span>
          ) : (
            <Link to="/" className="home-shortcut">
              Home
            </Link>
          )}
        </div>

        <div className="crumb">
          {paths.map((path, index) => {
            return (
              activeTab === index && (
                <Link to={path.path} key={`tab-${index}`} className="tabs">
                  {path.name}
                </Link>
              )
            );
          })}
        </div>

        <div className="side right">
          <button
            type="button"
            className="mute-toggle"
            onClick={handleToggleMute}
            aria-label={muted ? "Unmute sound effects" : "Mute sound effects"}
            aria-pressed={muted}
          >
            {muted ? "🔇" : "🔊"}
          </button>
          <img src={chock} alt="chocobo running" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
