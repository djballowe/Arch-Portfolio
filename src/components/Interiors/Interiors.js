import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const getImages = async () => {
  const res = await fetch("http://localhost:8080/api/");
  return res.json();
};

export default function Interiors(props) {
  let navigate = useNavigate();
  const { data, status } = useQuery("images", getImages);
  const [col1, setCol1] = useState([]);
  const [col2, setCol2] = useState([]);
  const [col3, setCol3] = useState([]);

  const imageClick = (e) => {
    navigate("/view");
    props.click(e.target.id);
  };

  const interiorImagesCol = col1.map((image) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        id={image.img_id}
        key={image.myid}
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
        key={image.myid}
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
        key={image.myid}
        onClick={imageClick}
        src={require(`../../Images/Interiors/${image.file}`)}
      />
    );
  });

  useEffect(() => {
    const setImages = () => {
      if (status === "success") {
        let interiors = data.filter((item) => item.type === "interiors");
        for (let i = 0; i < interiors.length; i++) {
          if (interiors[i].col === "1") {
            setCol1((curr) => [...curr, interiors[i]]);
          } else if (interiors[i].col === "2") {
            setCol2((curr) => [...curr, interiors[i]]);
          } else {
            setCol3((curr) => [...curr, interiors[i]]);
          }
        }
      }
    };
    setImages();
  }, [data, status]);

  if (status === "loading") {
    return <p>This is a spinner just pretend</p>;
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
