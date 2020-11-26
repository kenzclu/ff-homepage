import React from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";

import Navbar from "./components/molecules/navbar/navbar";
import Contact from "./components/pages/contact/contact";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Resource from "./components/pages/resource/Resource";
import Project from "./components/pages/project/Project";
import Website from "./components/pages/about/Website";

export const paths = [
  {
    path: "/",
    exact: true,
    component: Home,
    name: "Home",
  },
  {
    path: "/about/website",
    exact: true,
    component: Website,
    name: "About Website",
  },
  {
    path: "/about",
    exact: true,
    component: About,
    name: "About",
  },
  {
    path: "/resources",
    component: Resource,
    name: "Resources",
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
