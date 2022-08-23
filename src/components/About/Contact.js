import e from "express";
import React, { useState, useEffect } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
   
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
      <form action="" onSubmit={handleSubmit}>
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
            <button>SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
