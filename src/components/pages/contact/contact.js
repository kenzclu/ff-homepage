import React, { useState, useCallback } from "react";
import classNames from 'classnames';

import useAPI from "../../../services/api";
import { sendEmail } from "../../../services/request";
import "./contact.scss";

function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const callback = useCallback(() => {
    return sendEmail({ name: name, message: message })
  }, [name, message])

  const [{ inProgress, error, data }, makeRequest] = useAPI(callback, {})

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const onMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    makeRequest()
  }

  const canSubmit = name.length > 0 && message.length > 0 && !inProgress

  return (
    <div className='contact'>
      <div>Feel free to email me at <b>kenlu.me08@gmail.com</b></div>
      <h2>OR</h2>
      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <input type='text' placeholder='Name' value={name} onChange={onNameChange} />
        <textarea placeholder='Enter message here...' value={message} onChange={onMessageChange} rows={5} />
        <input disabled={!canSubmit} className={classNames({ 'disabled': !canSubmit })} type='submit' value={inProgress ? 'Sending...' : 'Send'} />
      </form>
      {!!error && <div className='error'>Email failed to send</div>}
      {!!data && <div className='success'>Email sent successfully</div>}
    </div>
  )
}

export default Contact
