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

  let interiors1 = images.filter(
    (item) => item.type === "interiors" && item.col === "1"
  );

  let interiors2 = images.filter(
    (item) => item.type === "interiors" && item.col === "2"
  );

  let interiors3 = images.filter(
    (item) => item.type === "interiors" && item.col === "3"
  );

  const interiorImagesCol1 = interiors1.map((image) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img src={require(`../../Images/Interiors/${image.file}`)} />
    );
  });

  const interiorImagesCol2 = interiors2.map((image) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img src={require(`../../Images/Interiors/${image.file}`)} />
    );
  });

  const interiorImagesCol3 = interiors3.map((image) => {
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
      <div className="column">{interiorImagesCol1}</div>
      <div className="column">{interiorImagesCol2}</div>
      <div className="column">{interiorImagesCol3}</div>
    </div>
  );
}
