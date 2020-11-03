import React, { useState, useCallback } from "react";
import classNames from 'classnames';

import useAPI from "../../../services/api";
import { sendEmail } from "../../../services/request";
import "./contact.scss";

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const callback = useCallback(() => {
    return sendEmail(name, email, message)
  }, [name, email, message])

  const [{ inProgress, error, data }, makeRequest] = useAPI(callback, {})

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    makeRequest()
  }

  const canSubmit = name.length > 0 && email.length > 0 && message.length > 0 && !inProgress

  return (
    <div className='contact'>
      <div>Feel free to email me at <b>kenlu.me08@gmail.com</b></div>
      <h2>OR</h2>
      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <input type='text' placeholder='Name' value={name} onChange={onNameChange} />
        <input type='email' placeholder='Email' value={email} onChange={onEmailChange} />
        <textarea placeholder='Enter message here...' value={message} onChange={onMessageChange} rows={5} />
        <input disabled={!canSubmit} className={classNames({ 'disabled': !canSubmit })} type='submit' value={inProgress ? 'Sending...' : 'Send'} />
      </form>
      {!!error && <div className='error'>Email failed to send</div>}
      {!!data && <div>Email sent successfully</div>}
    </div>
  )
}

export default Contact
