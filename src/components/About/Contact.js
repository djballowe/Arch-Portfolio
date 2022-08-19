import React from "react";

const Contact = () => {
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
      <form action="">
        <div className="contact-input">
          <p>Name*</p>
          <div className="input-name">
            <input type="text" required />
            <input type="text" required />
          </div>
          <div className="input-email">
            <p>Email*</p>
            <input type="text" required />
          </div>
          <div className="input-subject">
            <p>Subject*</p>
            <input type="text" required />
          </div>
          <div className="input-message">
            <p>Message*</p>
            <textarea name="" id="" cols="30" rows="10" required></textarea>
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
