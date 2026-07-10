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
  // Lazy initializer: isMuted() is a synchronous localStorage read, so this
  // reflects a mute persisted in a prior session on the very first render
  // instead of flashing the default and correcting it after mount.
  const [muted, setMuted] = useState(() => isMuted());

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

  // Derive the Home entry from `paths` itself (matched by its path) rather
  // than assuming it's always index 0, so this can't drift out of sync with
  // router.js.
  const homeIndex = paths.findIndex((path) => path.path === "/");
  const isHome = activeTab === homeIndex;

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
            <Link to={paths[homeIndex].path} className="home-shortcut">
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
