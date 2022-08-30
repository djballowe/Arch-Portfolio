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
        <p>- Arne Jacobsen</p>
        <p>Photographer, 3d artist, web-design</p>
        <p>
          Email:{" "}
          <span
            onClick={() => {
              window.location = "mailto:db@davidballowe.com";
            }}
          >
            db@davidballowe.com
          </span>
        </p>
        <p>
          Instagram:{" "}
          <a target="_blank" href="https://www.instagram.com/djballowe/" rel="noreferrer">
            @djballowe
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
