import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

const getImages = async () => {
  const res = await fetch("http://localhost:8080/api/");
  return res.json();
};

const Exteriors = () => {
  const { data, status } = useQuery("images", getImages);
  const [col1, setCol1] = useState([]);
  const [col2, setCol2] = useState([]);
  const [col3, setCol3] = useState([]);

  const exteriorImagesCol1 = col1.map((image) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        key={image.myid}
        src={require(`../../Images/Exteriors/${image.file}`)}
      />
    );
  });

  const exteriorImagesCol2 = col2.map((image) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        key={image.myid}
        src={require(`../../Images/Exteriors/${image.file}`)}
      />
    );
  });

  const exteriorImagesCol3 = col3.map((image) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        key={image.myid}
        src={require(`../../Images/Exteriors/${image.file}`)}
      />
    );
  });

  useEffect(() => {
    function sortImages() {
      if (data) {
        let exteriors = data.filter((item) => item.type === "exteriors");
        for (let i = 0; i < exteriors.length; i++) {
          if (exteriors[i].col === "1") {
            setCol1((curr) => [...curr, exteriors[i]]);
          } else if (exteriors[i].col === "2") {
            setCol2((curr) => [...curr, exteriors[i]]);
          } else {
            setCol3((curr) => [...curr, exteriors[i]]);
          }
        }
      }
    }
    sortImages();
  }, [data]);

  return (
    <div className="interiors-grid-container">
      <div className="column">{exteriorImagesCol1}</div>
      <div className="column">{exteriorImagesCol2}</div>
      <div className="column">{exteriorImagesCol3}</div>
    </div>
  );
};

export default Exteriors;
