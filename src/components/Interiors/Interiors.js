import React, { useState, useEffect } from "react";
import { images } from "../../Images/Data";
import { useNavigate } from "react-router-dom";

export default function Interiors(props) {
  let navigate = useNavigate();
  const [col1, setCol1] = useState([]);
  const [col2, setCol2] = useState([]);
  const [col3, setCol3] = useState([]);

  const imageClick = (e) => {
    navigate("/interiors-view");
    props.click(e.target.id);
  };

  const interiorImagesCol = col1.map((image, index) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        id={image.index}
        key={index}
        onClick={imageClick}
        src={require(`../../Images/Interiors/${image.file}`)}
      />
    );
  });

  const interiorImagesCol2 = col2.map((image, index) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        id={image.index}
        key={index}
        onClick={imageClick}
        src={require(`../../Images/Interiors/${image.file}`)}
      />
    );
  });

  const interiorImagesCol3 = col3.map((image, index) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        id={image.index}
        key={index}
        onClick={imageClick}
        src={require(`../../Images/Interiors/${image.file}`)}
      />
    );
  });

  useEffect(() => {
    const setImages = () => {
      let interiors = images.filter((item) => item.type === "interiors");
      for (let i = 0; i < interiors.length; i++) {
        switch (interiors[i].col) {
          case "1":
            interiors[i].index = i;
            setCol1((curr) => [...curr, interiors[i]]);
            break;
          case "2":
            interiors[i].index = i;
            setCol2((curr) => [...curr, interiors[i]]);
            break;
          case "3":
            interiors[i].index = i;
            setCol3((curr) => [...curr, interiors[i]]);
            break;
          default:
        }
      }
    };
    setImages();
  }, []);

  return (
    <div>
      <div className="interiors-grid-container">
        <div className="column">{interiorImagesCol}</div>
        <div className="column">{interiorImagesCol2}</div>
        <div className="column">{interiorImagesCol3}</div>
      </div>
    </div>
  );
}
