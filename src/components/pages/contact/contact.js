import React, { useState, useCallback } from "react";
import classNames from "classnames";

import useAPI from "../../../services/api";
import { sendEmail } from "../../../services/request";
import "./contact.scss";
import Page from "../../atoms/page/Page";

function Contact() {
  const [message, setMessage] = useState("");

  const callback = useCallback(() => {
    return sendEmail({ message: message });
  }, [message]);

  const [{ inProgress, error, data }, makeRequest] = useAPI(callback, {});

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequest();
  };

  const canSubmit = message.length > 0 && !inProgress;

  return (
    <Page back>
      <div className="contact">
        <h1>OPTIONS</h1>
        <div>
          Email me at <u><b>ken.zc.lu@gmail.com</b></u>
        </div>
        <h2>OR</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <textarea
            placeholder="Enter message here..."
            value={message}
            onChange={onMessageChange}
            rows={5}
          />
          <input
            disabled={!canSubmit}
            className={classNames({ disabled: !canSubmit })}
            type="submit"
            value={inProgress ? "Sending..." : "Send"}
          />
        </form>
        {!!error && <div className="error">Email failed to send</div>}
        {!!data && <div className="success">Email sent successfully</div>}
      </div>
    </Page>
  );
}

export default Contact;
