import React from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";

import Navbar from "./components/molecules/navbar/navbar";
import Project from "./components/project";
import Contact from "./components/pages/contact/contact";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";

export const paths = [
  {
    path: "/",
    exact: true,
    component: Home,
    name: "Home",
  },
  {
    path: "/about",
    component: About,
    name: "About"
  },
  {
    path: "/projects",
    component: Project,
    name: "My Projects",
  },
  {
    path: "/contact",
    component: Contact,
    name: "Contact",
  },
];

function Base() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="page-container">
        <Switch>
          {paths.map((path, i) => {
            return (
              <Route
                key={`path-${i}`}
                exact={path.exact || false}
                path={path.path}
                component={path.component}
              />
            );
          })}
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Base;
