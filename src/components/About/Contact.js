import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { mdiCheckboxMarkedCircleOutline } from "@mdi/js";
import Check from "@mdi/react";

const Contact = () => {
  const [sendStatus, setSendStatus] = useState(false);
  const [sent, setSent] = useState(false);

  const service_id = process.env.REACT_APP_SERVICE_ID;
  const template_id = process.env.REACT_APP_TEMPLATE_ID;
  const public_id = process.env.REACT_APP_PUBLIC_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendStatus(true);

    emailjs.sendForm(service_id, template_id, e.target, public_id).then(
      (result) => {
        setSendStatus(false);
        setSent(true);
        setTimeout(confirmSent, 2000);
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const confirmSent = () => {
    setSent(false);
    document.getElementById("form").reset();
  };

  useEffect(() => {
    const button = document.getElementById("button-submit-text");
    sendStatus ? (button.textContent = "...") : (button.textContent = "SEND");
    sent ? (button.style.display = "none") : (button.style.display = "block");
  });

  return (
    <div className="contact-container">
      <div className="contact-text">
        <p>Contact</p>
        <p>
          For all pricing and booking inquires, please fill out the form below.
          Include as much relevant information as possible. ie. location of
          project, amount of images required, the intended use of the images,
          and the relative timeline the project needs to take place. I usually
          get back within 48 hours. I look forward to hearing from you.
        </p>
      </div>
      <form action="" onSubmit={handleSubmit} id="form">
        <div className="contact-input">
          <p>Name*</p>
          <div className="input-name">
            <input type="text" required placeholder="First Name" name="first" />
            <input type="text" required placeholder="Last Name" name="last" />
          </div>
          <div className="input-email">
            <p>Email*</p>
            <input type="email" required name="email" />
          </div>
          <div className="input-subject">
            <p>Subject*</p>
            <input type="text" required name="subject" />
          </div>
          <div className="input-message">
            <p>Message*</p>
            <textarea cols="30" rows="10" required name="message"></textarea>
          </div>
          <div className="contact-submit">
            <button
              id="send-email-button"
              style={{
                backgroundColor: sent || sendStatus ? "black" : "",
              }}
            >
              <p id="button-submit-text">SEND</p>
              <div
                className="check"
                style={{
                  display: sent ? "flex" : "none",
                }}
              >
                <Check
                  path={mdiCheckboxMarkedCircleOutline}
                  size={1.5}
                  color="white"
                />
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
