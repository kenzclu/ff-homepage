import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import PixelIcon from "../../atoms/pixel-icon/PixelIcon";
import {
  HOME_BITMAP,
  SPEAKER_ON_BITMAP,
  SPEAKER_OFF_BITMAP,
} from "./navbarIcons";
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

  const handleToggleMute = () => {
    setMuted(toggleMuted());
  };

  return (
    <div className="navbar">
      <div className="bottom">
        <div className="side left">
          <Link to={paths[homeIndex].path} className="home-shortcut" aria-label="Home">
            <PixelIcon bitmap={HOME_BITMAP} />
          </Link>
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
            <PixelIcon bitmap={muted ? SPEAKER_OFF_BITMAP : SPEAKER_ON_BITMAP} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
