import React from "react";
import classNames from "classnames";
import "./Page.scss";
import { Link } from "react-router-dom";

function Page(props) {
  return (
    <div className="page">
      {props.back && (
        <div className="back">
          <Link to="/">{"< Back"}</Link>
        </div>
      )}
      <div className={classNames("menu", { "page-center": props.center })}>
        {props.children}
      </div>
    </div>
  );
}

export default Page;
