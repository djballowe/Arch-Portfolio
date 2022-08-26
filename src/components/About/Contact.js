import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [sendStatus, setSendStatus] = useState("SUBMIT");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const service_id = process.env.REACT_APP_SERVICE_ID;
  const template_id = process.env.REACT_APP_TEMPLATE_ID;
  const public_id = process.env.REACT_APP_PUBLIC_ID;

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, form.current, public_id).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

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
      <form action="" ref={form} onSubmit={handleSubmit}>
        <div className="contact-input">
          <p>Name*</p>
          <div className="input-name">
            <input
              type="text"
              required
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              type="text"
              required
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="input-email">
            <p>Email*</p>
            <input
              type="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-subject">
            <p>Subject*</p>
            <input
              type="text"
              required
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </div>
          <div className="input-message">
            <p>Message*</p>
            <textarea
              cols="30"
              rows="10"
              required
              onChange={(e) => {
                setBody(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="contact-submit">
            <button>{sendStatus}</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
