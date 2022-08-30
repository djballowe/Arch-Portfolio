import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Spinner from "../Loading/Spinner";

const getImages = async () => {
  const res = await fetch("/api/test");
  return res.json();
};

export default function Interiors(props) {
  let navigate = useNavigate();
  const { data, status } = useQuery("images", getImages);
  const [col1, setCol1] = useState([]);
  const [col2, setCol2] = useState([]);
  const [col3, setCol3] = useState([]);

  const imageClick = (e) => {
    navigate("/interiors-view");
    props.click(e.target.id);
  };

  const interiorImagesCol = col1.map((image) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        id={image.img_id}
        key={image._id}
        onClick={imageClick}
        src={require(`../../Images/Interiors/${image.file}`)}
      />
    );
  });

  const interiorImagesCol2 = col2.map((image) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        id={image.img_id}
        key={image._id}
        onClick={imageClick}
        src={require(`../../Images/Interiors/${image.file}`)}
      />
    );
  });

  const interiorImagesCol3 = col3.map((image) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        id={image.img_id}
        key={image._id}
        onClick={imageClick}
        src={require(`../../Images/Interiors/${image.file}`)}
      />
    );
  });

  useEffect(() => {
    const setImages = () => {
      if (status === "success") {
        let exteriors = data.filter((item) => item.type === "exteriors");
        let interiors = data.filter((item) => item.type === "interiors");
        if (window.location.pathname === "/interiors") {
          for (let i = 0; i < interiors.length; i++) {
            switch (interiors[i].col) {
              case "1":
                setCol1((curr) => [...curr, interiors[i]]);
                break;
              case "2":
                setCol2((curr) => [...curr, interiors[i]]);
                break;
              case "3":
                setCol3((curr) => [...curr, interiors[i]]);
                break;
              default:
            }
          }
        } else if (window.location.pathname === "/exteriors") {
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
    };
    setImages();
  }, [data, status]);

  if (status === "loading") {
    return <Spinner />;
  } else {
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
}
