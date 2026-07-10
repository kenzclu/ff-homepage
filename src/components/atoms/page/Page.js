import React, { useEffect } from "react";
import classNames from "classnames";
import "./Page.scss";
import { Link, useHistory } from "react-router-dom";
import { playCancelSound } from "../sfx/sfx";

function Page(props) {
  const history = useHistory();

  useEffect(() => {
    if (!props.back) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      const { tagName, isContentEditable } = event.target;
      if (
        event.key !== "Backspace" ||
        tagName === "INPUT" ||
        tagName === "TEXTAREA" ||
        isContentEditable
      ) {
        return;
      }

      playCancelSound();
      history.push("/");
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [props.back, history]);

  return (
    <div className="page">
      <div className={classNames("menu", { "page-center": props.center })}>
        {props.back && (
          <div className="back">
            <Link to="/">{"< Back"}</Link>
          </div>
        )}
        {props.children}
      </div>
    </div>
  );
}

export default Page;
