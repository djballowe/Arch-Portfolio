import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Spinner from "../Loading/Spinner";

const getImages = async () => {
  const res = await fetch("/api/list");
  return res.json();
};

const Exteriors = (props) => {
  let navigate = useNavigate();
  const { data, status } = useQuery("images", getImages);
  const [col1, setCol1] = useState([]);
  const [col2, setCol2] = useState([]);
  const [col3, setCol3] = useState([]);

  const imageClick = (e) => {
    navigate("/exteriors-view");
    props.click(e.target.id);
  };

  const exteriorImagesCol1 = col1.map((image) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        id={image.img_id}
        key={image._id}
        onClick={imageClick}
        src={require(`../../Images/Exteriors/${image.file}`)}
      />
    );
  });

  const exteriorImagesCol2 = col2.map((image) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        id={image.img_id}
        key={image._id}
        onClick={imageClick}
        src={require(`../../Images/Exteriors/${image.file}`)}
      />
    );
  });

  const exteriorImagesCol3 = col3.map((image) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        id={image.img_id}
        key={image._id}
        onClick={imageClick}
        src={require(`../../Images/Exteriors/${image.file}`)}
      />
    );
  });

  useEffect(() => {
    function sortImages() {
      if (status === "success") {
        let exteriors = data.filter((item) => item.type === "exteriors");
        for (let i = 0; i < exteriors.length; i++) {
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
    }
    sortImages();
  }, [data, status]);

  if (status === "loading") {
    return <Spinner />;
  } else {
    return (
      <div className="interiors-grid-container">
        <div className="exterior-column">{exteriorImagesCol1}</div>
        <div className="exterior-column">{exteriorImagesCol2}</div>
        <div className="exterior-column">{exteriorImagesCol3}</div>
      </div>
    );
  }
};

export default Exteriors;
