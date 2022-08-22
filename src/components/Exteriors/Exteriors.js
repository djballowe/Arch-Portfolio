import React, { useState, useEffect } from "react";
import axios from "axios";

const Exteriors = () => {
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

  let exteriors1 = images.filter(
    (item) => item.type === "exteriors" && item.col === "1"
  );

  let exteriors2 = images.filter(
    (item) => item.type === "exteriors" && item.col === "2"
  );

  let exteriors3 = images.filter(
    (item) => item.type === "exteriors" && item.col === "3"
  );

  const exteriorImagesCol1 = exteriors1.map((image) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img src={require(`../../Images/Exteriors/${image.file}`)} />
    );
  });

  const exteriorImagesCol2 = exteriors2.map((image) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img src={require(`../../Images/Exteriors/${image.file}`)} />
    );
  });

  const exteriorImagesCol3 = exteriors3.map((image) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img src={require(`../../Images/Exteriors/${image.file}`)} />
    );
  });

  useEffect(() => {
    getImages();
  }, []);
  return (
    // <div>
    //   <div className="interiors-grid-container">
    //     <div className="column">
    //       <img src={require("../../Images/Interiors/interiors1.JPG")} alt="" />
    //       <img src={require("../../Images/Interiors/interiors2.JPG")} alt="" />
    //     </div>
    //     <div className="column">
    //       <img src={require("../../Images/Interiors/interiors4.JPG")} alt="" />
    //       <img src={require("../../Images/Interiors/interiors3.JPG")} alt="" />
    //     </div>
    //     <div className="column">
    //       <img src={require("../../Images/Interiors/interiors5.JPG")} alt="" />
    //       <img src={require("../../Images/Interiors/interiors6.JPG")} alt="" />
    //     </div>
    //     <div className="column">
    //       <img src={require("../../Images/Interiors/interiors7.JPG")} alt="" />
    //       <img src={require("../../Images/Interiors/interiors8.JPG")} alt="" />
    //     </div>
    //   </div>
    // </div>

    <div className="interiors-grid-container">
      <div className="column">{exteriorImagesCol1}</div>
      <div className="column">{exteriorImagesCol2}</div>
      <div className="column">{exteriorImagesCol3}</div>
    </div>
  );
};

export default Exteriors;
