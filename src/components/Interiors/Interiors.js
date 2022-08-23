import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Interiors() {
  const [images, setImages] = useState([]);

  const getImages = () => {
    axios
      .get("http://localhost:8080/api/")
      .then((response) => {
        const data = response.data;
        setImages(data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  let interiors = images.filter(
    (item) => item.type === "interiors"
  );


  const interiorImagesCol = interiors.map((image) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img src={require(`../../Images/Interiors/${image.file}`)} />
    );
  });


  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="interiors-grid-container">
      <div className="overlay"></div>
      <div className="column">{interiorImagesCol}</div>
      <div className="column">{interiorImagesCol}</div>
      <div className="column">{interiorImagesCol}</div>
    </div>
  );
}
