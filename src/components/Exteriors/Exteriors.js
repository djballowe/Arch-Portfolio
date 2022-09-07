import React, { useState, useEffect } from "react";
import { images } from "../../Images/Data";
import { useNavigate } from "react-router-dom";

const Exteriors = (props) => {
  let navigate = useNavigate();
  const [col1, setCol1] = useState([]);
  const [col2, setCol2] = useState([]);
  const [col3, setCol3] = useState([]);

  const imageClick = (e) => {
    navigate("/exteriors-view");
    props.click(e.target.id);
  };

  const exteriorImagesCol1 = col1.map((image, index) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        id={image.index}
        key={index}
        onClick={imageClick}
        src={require(`../../Images/exteriors/${image.file}`)}
      />
    );
  });

  const exteriorImagesCol2 = col2.map((image, index) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        id={image.index}
        key={index}
        onClick={imageClick}
        src={require(`../../Images/exteriors/${image.file}`)}
      />
    );
  });

  const exteriorImagesCol3 = col3.map((image, index) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        id={image.index}
        key={index}
        onClick={imageClick}
        src={require(`../../Images/exteriors/${image.file}`)}
      />
    );
  });

  useEffect(() => {
    function sortImages() {
      let exteriors = images.filter((item) => item.type === "exteriors");
      for (let i = 0; i < exteriors.length; i++) {
        exteriors[i].index = i;
        switch (exteriors[i].col) {
          case "1":
            setCol1((curr) => [...curr, exteriors[i]]);
            break;
          case "2":
            setCol2((curr) => [...curr, exteriors[i]]);
            break;
          case "3":
            setCol3((curr) => [...curr, exteriors[i]]);
            break;
          default:
        }
      }
    }
    sortImages();
  }, []);

  return (
    <div className="interiors-grid-container">
      <div className="exterior-column">{exteriorImagesCol1}</div>
      <div className="exterior-column">{exteriorImagesCol2}</div>
      <div className="exterior-column">{exteriorImagesCol3}</div>
    </div>
  );
};

export default Exteriors;
