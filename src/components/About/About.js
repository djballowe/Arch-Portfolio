import React from "react";
import profile from "../../Images/cover square.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="profile-image">
        <img src={profile} alt="" />
      </div>
      <div className="profile-text">
        <p>"If a building becomes architecture, then it is art"</p>
        <p>Arne Jacobsen</p>
        <p>Photographer, 3d artist, web-design</p>
        <p>Email: db@davidballowe.com</p>
        <p>Instagram: @djballowe</p>
      </div>
    </div>
  );
};

export default About;
