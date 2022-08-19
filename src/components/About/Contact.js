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
      <div>
        <label htmlFor="">Name</label>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
        <label htmlFor="">Email</label>
        <input type="text" />
        <input type="text" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
