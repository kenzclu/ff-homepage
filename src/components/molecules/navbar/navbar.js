import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import classNames from "classnames";

import chock from "../../../assets/chocobo.gif";
import { paths } from "../../../router";
import "./navbar.scss";

function Navbar() {
  const history = useHistory();
  const lastActiveTab = parseInt(localStorage.getItem("lastActive"));
  const [activeTab, setActiveTab] = useState(lastActiveTab || 0);

  useEffect(() => {
    setActiveTab(
      paths.findIndex((path) => path.path === history.location.pathname)
    );
  }, [history.location]);

  return (
    <div className="navbar">
      <div className="top">
        <img src={chock} alt="chocobo running" />
        <div className="name">Kenneth L.</div>
        <img src={chock} alt="chocobo running" />
      </div>
      <div className="bottom">
        {paths.map((path, index) => {
          return (
            <Link to={path.path} key={`tab-${index}`}>
              <div
                className={classNames("tabs", { active: activeTab === index })}
                onClick={() => setActiveTab(index)}
              >
                {path.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
