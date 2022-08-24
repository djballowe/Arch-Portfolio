import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

const getImages = async () => {
  const res = await fetch("http://localhost:8080/api/");
  return res.json();
};

const InteriorSlide = (props) => {
  const { data, status } = useQuery("images", getImages);
  const [slide, setSlide] = useState([]);
  let navigate = useNavigate();

  const handleClick = (e) => {
    const button = e.target.id;
    if (button === "+") {
    } else {
    }
  };

  console.log(props.src);
  useEffect(() => {
    const setImages = () => {
      if (status === "success") {
        let interiors = data.filter((image) => image.type === "interiors");
        setSlide(interiors);
      }
    };
    setImages();
  }, [data, status]);

  return (
    <div className="overlay">
      <div className="interior-slide-img">
        <img src={require(`../../Images/Interiors/Book-3.JPG`)} alt="" />
      </div>
      <div className="slide-controls-view">
        <p onClick={handleClick} id="-">
          Prev
        </p>
        <p>/</p>
        <p onClick={handleClick} id="+">
          Next
        </p>
      </div>
    </div>
  );
};

export default InteriorSlide;
