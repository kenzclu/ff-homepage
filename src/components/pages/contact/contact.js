import React, { useState, useCallback } from "react";
import classNames from "classnames";

import useAPI from "../../../services/api";
import { sendEmail } from "../../../services/request";
import "./contact.scss";
import Page from "../../atoms/page/Page";
import PageHeader from "../../molecules/page-header/PageHeader";
import SectionTitle from "../../atoms/section-title/SectionTitle";

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
        <PageHeader
          name="CONTACT INFORMATION"
          rows={[{ label: "EMAIL", value: "ken.zc.lu@gmail.com" }]}
        />

        <section className="contact__section">
          <SectionTitle>Send a message</SectionTitle>
          <form className="contact__form" onSubmit={handleSubmit}>
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
          {!!error && (
            <div className="contact__error">Email failed to send</div>
          )}
          {!!data && (
            <div className="contact__success">Email sent successfully</div>
          )}
        </section>
      </div>
    </Page>
  );
}

export default Contact;
